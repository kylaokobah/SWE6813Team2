//returns new state from using the types and actions
import * as AT from './types';
import { transformProfile } from './statsReducer';
import { collection, doc, getDoc, setDoc, getDocs}  from 'firebase/firestore';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { firestoreDb, storageDb } from '../../database/firebase';
import { LOCAL_STORAGE } from '../../utils/consts';
import fetchFortniteProfile from '../../api/fetchFortniteProfile'
import ls from 'local-storage';
//API call to Fortnite Tracker
//import {requestProfile} from '../../api/FortniteTracker.js'

const pending = (actionType) => `${actionType}_PENDING`;
const fulfilled = (actionType) => `${actionType}_FULFILLED`;
const rejected = (actionType) => `${actionType}_REJECTED`;

export const initialState = () => ({
    profiles: [],
    active: '',
    error: null,
    pending: [],
});

function updateCompare(compare, profile) {
    var idx = compare.indexOf(profile);
    if (idx !== -1) {
        compare.splice(idx, 1);
    } else {
        compare.push(profile);
    }
    return compare;
}

function updateProfiles(profiles, profile) {
    const transformed = transformProfile(profile);
    const index = profiles.findIndex((item) => item.epicName === profile.epicName);

    if (index > -1) {
        profiles[index] = transformed;
    } else {
        profiles.unshift(transformed);
    }

    // Update database
    ls(LOCAL_STORAGE.SAVED_PROFILES, JSON.stringify(profiles));

    return profiles;
}

function deleteProfile(profiles, profile) {
    const transformed = profiles.filter((item) => item.epicName !== profile);

     //Update LocalStorage
    ls(LOCAL_STORAGE.SAVED_PROFILES, JSON.stringify(transformed));

    return transformed;
}

function updateDarkMode(isDarkMode) {
    ls('fst-dark-mode', isDarkMode === true);
    return isDarkMode === true;
}

function clearProfiles() {
    // Clear saved instances in LocalStorage
    //ls.remove(LOCAL_STORAGE.SAVED_PROFILES);
    return initialState();
}


const reducer = (state = initialState(), action) => {
    switch (action.type) {
        case fulfilled(AT.FST_FETCH_PROFILE):
            return {
                ...state,
                profiles: updateProfiles(state.profiles, action.payload.data.profile),
                active: action.payload.data.profile.epicName,
                search: '',
                error: null
            };
        case AT.FST_SET_ERROR:
            return {
                ...state,
                error: action.error,
                active: ''
            };
        case AT.FST_SET_PROFILE:
            return {
                ...state,
                active: action.profile,
                error: null
            };        
        case AT.FST_DELETE_PROFILE:
            const transformed = deleteProfile(state.profiles, action.profile)
            return {
                ...state,
                profiles: transformed,
                active: transformed.length > 0 ? transformed[0].epicName : ''
            };
        case AT.FST_SET_SEARCH_VALUE:
            return {
                ...state,
                search: action.value
            };
        case AT.FST_TOGGLE_TO_COMPARE:
            return {
                ...state,
                compare: updateCompare(state.compare, action.profile)
            };
        case AT.FST_CLEAR_COMPARE:
            return {
                ...state,
                compare: []
            };
        case AT.FST_CLEAR_RECENTLY_SEARCHED:
            return {
                ...clearProfiles(),
                isDarkMode: state.isDarkMode
            };
        case AT.FST_SET_SELECTED_PLATFORM:
            return {
                ...state,
                platform: action.platform
            };
        case AT.FST_LOADING_ADD:
                return {
                    ...state,
                    pending: [...state.pending, action.actionType]
                };
        case AT.FST_LOADING_REMOVE:
            return {
                ...state,
                pending: state.pending.filter((elem) => elem !== action.actionType)
            };
        case AT.FST_TOGGLE_DARK_MODE:
            return {
                ...state,
                isDarkMode: updateDarkMode(action.isDarkMode)
            };
        default:
            return state;
    }
};

export default reducer;

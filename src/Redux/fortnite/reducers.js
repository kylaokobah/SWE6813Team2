//returns new state from using the types and actions
import * as AT from './actionTypes';
import { transformProfile } from './statsReducer';
import { collection, doc, getDoc, setDoc, getDocs}  from 'firebase/firestore';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { firestoreDb, storageDb } from '../../database/firebase';

const pending = (actionType) => `${actionType}_PENDING`;
const fulfilled = (actionType) => `${actionType}_FULFILLED`;
const rejected = (actionType) => `${actionType}_REJECTED`;

export const initialState = () => ({
    profiles: [],
    active: '',
    error: null,
    pending: [],
});

function updateProfiles(profiles, profile) {
    const transformed = transformProfile(profile);
    const index = profiles.findIndex((item) => item.epicUserHandle === profile.epicUserHandle);

    if (index > -1) {
        profiles[index] = transformed;
    } else {
        profiles.unshift(transformed);
    }

    // Update database
    ls(LOCAL_STORAGE.SAVED_PROFILES, JSON.stringify(profiles));

    return profiles;
}

const reducer = (state = initialState(), action) => {
    switch (action.type) {
        case fulfilled(AT.FST_FETCH_PROFILE):
            return {
                ...state,
                profiles: updateProfiles(state.profiles, action.payload.data.profile),
                active: action.payload.data.profile.epicUserHandle,
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

        case AT.FST_SET_SELECTED_PLATFORM:
            return {
                ...state,
                platform: action.platform
            };

        default:
            return state;
    }
};

export default reducer;

import UserActionTypes from './user.types';
import { useState, useEffect } from 'react'
// Firebase
import {createUserProfileDocument, getCurrentUser } from '../../database/collection/users';
import { authDb, firestoreDb, storageDb,} from '../../database/firebase';
import { collection, doc, getDoc, setDoc, getDocs, query, updateDoc, arrayUnion, arrayRemove } from 'firebase/firestore';

const COLLECTION_NAME = "user";

// Sign In
export const signInStart = () => ({
  type: UserActionTypes.SIGN_IN_START
});
export const signInSuccess = userAndPassword => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
  payload: userAndPassword
});
export const signInFailure = error => ({
  type: UserActionTypes.SIGN_IN_FAILURE,
  payload: error
});
// Check user session
export const checkUserSessionStart = () => ({
  type: UserActionTypes.CHECK_USER_SESSION_START
});
export const checkUserSessionEnd = () => ({
  type: UserActionTypes.CHECK_USER_SESSION_END
});

/*export const signInWithGoogle = () => async (dispatch) => {
  try {
    dispatch(signInStart());
    const { user } = await auth.signInWithPopup(googleAuthProvider);
    const userRef = await createUserProfileDocument(user);
    userRef.onSnapshot(snapShot => {
      dispatch(signInSuccess({
        id: snapShot.id,
        ...snapShot.data()
      }));
    });
  }
  catch (error) {
    dispatch(signInFailure(error.message));
  }
}*/
//sign in with email
export const signInWithEmail = ({ email, password }) => async (dispatch) => {

  try {
    dispatch(signInStart());
    const { user } = await authDb.signInWithEmailAndPassword(email, password);
    const userRef = await createUserProfileDocument(user);
    userRef.onSnapshot(snapShot => {
      dispatch(signInSuccess({
        id: snapShot.id,
        ...snapShot.data()
      }));
    });
  }
  catch (error) {
    dispatch(signInFailure(error.message));
  }
}
// Check user session
export const checkUserSession = () => async (dispatch) => {
  try {
    dispatch(checkUserSessionStart());
    const userAuth = await getCurrentUser();
    if (!userAuth) {
      dispatch(checkUserSessionEnd());
      return;
    }
    const userRef = await createUserProfileDocument(userAuth);
    userRef.onSnapshot(snapShot => {
      dispatch(signInSuccess({
        id: snapShot.id,
        ...snapShot.data()
      }));
    });
  } catch (error) {
    dispatch(signInFailure(error.message));
  }
}


// Sign Up
export const signUpStart = () => ({
  type: UserActionTypes.SIGN_UP_START
});
export const signUpSuccess = user => ({
  type: UserActionTypes.SIGN_UP_SUCCESS,
  payload: user
});
export const signUpFailure = error => ({
  type: UserActionTypes.SIGN_UP_FAILURE,
  payload: error
});
export const signUpWithEmail = ({ epicName, email, password, photoURL, displayName  }) => async (dispatch) => {
  try {
    dispatch(signUpStart());
    const { user } = await authDb.createUserWithEmailAndPassword(email, password)
    const uploadPath = `photoURL/${user.uid}/${photoURL.name}`
    const img = await storageDb.ref(uploadPath).put(photoURL)
    const imgUrl = await img.ref.getDownloadURL()
     // add display name to user
    const userRef= await user.updateProfile(user, { displayName, photoURL: imgUrl, epicName })
    userRef.onSnapshot(snapShot => {
      dispatch(signUpSuccess({
        id: snapShot.id,
        ...snapShot.data()
      }));
    });
  }
  catch (error) {
    dispatch(signUpFailure(error.message));
  }
}


// Sign out
export const signOutStart = () => ({
  type: UserActionTypes.SIGN_OUT_START
});
export const signOutSuccess = () => ({
  type: UserActionTypes.SIGN_OUT_SUCCESS,
});
export const signOutFailure = error => ({
  type: UserActionTypes.SIGN_OUT_FAILURE,
  payload: error
});

export const userSignOut = () => async (dispatch) => {
  try {
    dispatch(signOutStart());
    await authDb.signOut();
    dispatch(signOutSuccess());
  }
  catch (error) {
    dispatch(signOutFailure(error.message));
  }
}

/*export const forniteUser = () => async (dispatch) =>{
    //get fornite username
    const [fortniteUser, setFortniteUser] = useState({});
     setFortniteInputs({
          username: inputs.value
        });
    }*/
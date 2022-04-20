import { useState, useEffect } from 'react'
// Firebase
import {createUserProfileDocument, getCurrentUser } from '../database/collection/users';
import { authDb, firestoreDb} from '../database/firebase';
import {
collection,
doc,
getDoc,
setDoc,
getDocs,
query,
updateDoc,
arrayUnion,
arrayRemove,
Timestamp
}from 'firebase/firestore';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
//context provider
import { useAuthContext } from './useAuthContext'
//Redux
//import UserActionTypes from '../utils/user.types';

export const useLogin = () => {
  const [isCancelled, setIsCancelled] = useState(false)
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const { dispatch } = useAuthContext()

  const login = async (email, password) => {
    setError(null)
    setIsPending(true)
    const auth = getAuth();
    try {
      // login
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;

      // dispatch login action
      dispatch({ type: 'LOGIN', payload: user })

      if (!isCancelled) {
        setIsPending(false)
        setError(null)
      }
    });
    }
    catch(err) {
      if (!isCancelled) {
        setError(err.message)
        setIsPending(false)
      }
    }
  }

  useEffect(() => {
    return () => setIsCancelled(true)
  }, [])

  return { login, isPending, error }
}
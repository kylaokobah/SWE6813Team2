import { useState, useEffect } from 'react'
import {authDb, firestoreDb, storageDb } from '../database/firebase'
import { useAuthContext } from './useAuthContext'
import { onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, OAuthProvider, createUserWithEmailAndPassword } from 'firebase/auth';

export const useSignup = () => {
  const [isCancelled, setIsCancelled] = useState(false)
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const { dispatch } = useAuthContext()

  const signup = async (email, password, epicName, thumbnail) => {
    setError(null)
    setIsPending(true)
  
    try {
      // signup
      const res = await authDb.createUserWithEmailAndPassword(email, password)

      if (!res) {
        throw new Error('Could not complete signup')
      }

      const uploadPath = `thumbnails/${res.user.uid}/${thumbnail.name}`
      const img = await storageDb.ref(uploadPath).put(thumbnail)
      const imgUrl = await img.ref.getDownloadURL()

      // add display name to user
      await res.user.updateProfile({ epicName, photoURL: imgUrl })

      await firestoreDb.collection('user').doc(res.user.uid).set({
        online: true,
        photoURL: imgUrl,
        epicName
      })

      // dispatch login action
      dispatch({ type: 'LOGIN', payload: res.user })

      if (!isCancelled) {
        setIsPending(false)
        setError(null)
      }
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

  return { signup, error, isPending }
}
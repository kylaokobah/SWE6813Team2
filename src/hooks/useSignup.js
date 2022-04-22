import { useState, useEffect, useCallback } from 'react'
import { authDb, firestoreDb, storageDb, timestamp } from '../database/firebase'
import { useAuthContext } from './useAuthContext'
import {createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { collection, doc, getDoc, setDoc, getDocs}  from 'firebase/firestore';
import {useNavigate} from "react-router-dom";

export const useSignup = () => {
  const [isCancelled, setIsCancelled] = useState(false)
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const { dispatch } = useAuthContext()
  const navigate = useNavigate();


const signup = async (email, password, thumbnail, createdAt) => {
    setError(null)
    setIsPending(true)

      try {
        // signup
        const res = await authDb.createUserWithEmailAndPassword(email, password)

        if (!res) {
           console.log('No user found')
           return
         }

      //adds thumbnail to firebase storage file titled: thumbnails
      const uploadPath = `thumbnails/${res.user.uid}/${thumbnail.name}`
      const img = await storageDb.ref(uploadPath).put(thumbnail)
      const imgUrl = await img.ref.getDownloadURL()

// add display name to user
      await res.user.updateProfile({ photoURL: imgUrl })
      if (isCancelled || isPending){
      console.log('User registration has failed.')
      } else
      await firestoreDb.collection('user').doc(res.user.uid).set({
        online: true,
        photoURL: imgUrl,
        email,
        password,
        createdAt: timestamp.fromDate(new Date()),
      })
      console.log('username has been added')

      // dispatch login action
      dispatch({ type: 'LOGIN', payload: res.user })

     console.log('almost')
      navigate(`/onboarding/${user.user.uid}/createProfile`)

      console.log('made it')

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
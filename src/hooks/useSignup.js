import { useState, useEffect } from 'react'
import { authDb, firestoreDb, storageDb } from '../database/firebase'
import { useAuthContext } from './useAuthContext'
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { collection, doc, getDoc, setDoc, getDocs, serverTimestamp}  from 'firebase/firestore';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {useNavigate} from "react-router-dom";

const COLLECTION_NAME = "user";



export const useSignup = () => {
  const [isCancelled, setIsCancelled] = useState(false)
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const { dispatch } = useAuthContext()
  const [message,setMessage] = useState(null);
   const navigate = useNavigate();


const signup = async (email, password, thumbnail) => {
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
      await res.user.updateProfile({ photoURL: imgUrl })

      await firestoreDb.collection('user').doc(res.user.uid).set({
        photoURL: imgUrl,
        email,
        password,
      })

      // dispatch login action
      dispatch({ type: 'LOGIN', payload: res.user })


      navigate(`/onboarding/${res.user.uid}/createProfile`)


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
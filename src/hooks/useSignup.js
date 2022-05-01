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
      //const uploadPath = 'gs://gamers-meet-293c1.appspot.com/avatar/user/userId'
      const uploadPath = `thumbnails/${res.user.uid}/${thumbnail.name}`
      //const img = await storageDb.ref(uploadPath).put(avatar)
      const img = await storageDb.ref(uploadPath).put(thumbnail)
      const imgUrl = await img.ref.getDownloadURL()

       // add display name to user
      await res.user.updateProfile({ photoURL: imgUrl })

      //invalid urls will be displayed
      console.log("testing the image",imgUrl, res.user.image_url);

      if (isCancelled === true || error === true ){
      console.log(isCancelled && error)
      return console.log("Your registration failed. Please try again.")
      } else
      await firestoreDb.collection('user').doc(res.user.uid).set({
        online: true,
        photoURL: imgUrl,
        email,
        password,
        createdAt: timestamp.fromDate(new Date()),
      })
     console.log(res.user.uid, "Here are the passing details");

      // dispatch login action
      dispatch({ type: 'LOGIN', payload: res.user })


      navigate(`/onboarding/${res.user.uid}/createProfile`)

      console.log('User was successfully navigated to the Create a Profile')

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
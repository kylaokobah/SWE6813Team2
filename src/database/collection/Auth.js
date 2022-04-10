import React, { useEffect, useState } from 'react';
import { authDb, firestoreDb, storageDb, googleProvider} from '../firebase.js'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, updateProfile, signOut, getAdditionalUserInfo } from "firebase/auth";



  /*const handleGoogle = () => {
        setIsLoading(true)
         signInWithPopup(authDb, googleProvider)
                    .then((result) => {
                        const details = getAdditionalUserInfo(result)
                        //console.log(result);
                        const isNewUser= details.isNewUser;
                        if(result !== details.isNewUser ){

                        //console.log(details)
                        const user = result.user;
                         return sendUser(user.email, user.displayName, 'PUT');
                        //setAuthError('')
                      }
                    })
            .catch((error) => {
                    if (error.code && error.code.data.msg === 'needs to make account') {
                     setAuthError("Account doesn't exist. Make one with a community onboarding link!")
                     } else if (error.code && error.code.data) {
                     setAuthError(error.code.data)
                    }
                  })
            .finally(() => setIsLoading(false));
    }*/

    export const AuthChange = (callback: any) => {

        return onAuthStateChanged(authDb, (user) => {
            callback(user);
        })
    }

 /*export const sendUser = (email, displayName, method) =>{
        const user = {email, displayName}
        fetch('https://gamers-meet-293c1.web.app/users', {
           method: method,
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then()
    }*/

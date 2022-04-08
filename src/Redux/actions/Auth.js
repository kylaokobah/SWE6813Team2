import { authDb, firestoreDb, storageDb, googleProvider} from '../../database/firebase.js'
import React, { useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, updateProfile, signOut } from "firebase/auth";

const useUserAuthActions = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true)
    const [authError, setAuthError] = useState('')

  const handleRegister = (email, password, name) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(authDb, email, password)
            .then((userCredential) => {
                setAuthError('');
                const newUser = {email, displayName: name}
                console.log(newUser)
                setUser(newUser)
                sendUser(email, name, 'POST')
                updateProfile(authDb.currentUser, {
                    displayName: name 
                }).then(() =>{
                }).catch((error) =>{
                })
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

  const handleGoogle = () => {
        setIsLoading(true)
        signInWithPopup(authDb, googleProvider)
        var docRef= firestoreDb.collection('Users')
            .then((result) => {
                const user = result.user;
                sendUser(user.email, user.displayName, 'PUT')
                setAuthError('')
            }) 
            .catch((error) => {
                    if (error.response && error.response.data.msg === 'needs to make account') {
                      setAuthError("Account doesn't exist. Make one with a community onboarding link!")
                    } else if (error.response && error.response.data) {
                      setAuthError(error.response.data)
                    }
                  })
            .finally(() => setIsLoading(false));
    }


useEffect(() => {
        const unsubscribe = onAuthStateChanged(authDb, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unsubscribe;
    }, [])

    const handleLogin = (email, password) => {
        setIsLoading(true)
        signInWithEmailAndPassword(authDb, email, password)
            .then((userCredential) => {
                setAuthError('')
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

  const sendUser = (email, displayName, method) =>{
        const user = {email, displayName}
        fetch('https://gamers-meet-293c1.web.app/users', {
           method: method,
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then()
    }
const logout = () => {
        signOut(authDb).then(() => {
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false))
    }

return {
        user,
        isLoading,
        handleRegister,
        handleGoogle,
        handleLogin,
        authError,
        logout,
    }
}

export default useUserAuthActions;
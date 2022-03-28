/*import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../database/firebase.js";

const userAuthContext = createContext();

//PSN Access token
const myNpsso= "M7heKQ4wq9KPT7qbiZk7XUS45TlB9FWS6B56X5ihFv8jZ8vf3JhsaknremoTCHJS";
// We'll exchange your NPSSO for a special access code.
const accessCode = await exchangeNpssoForCode(npsso);
// We can use the access code to get your access token and refresh token.
const authorization = await exchangeCodeForAccessToken(accessCode);

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState({});

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  function logOut() {
    return signOut(auth);
  }
  function googleSignIn() {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      console.log("Auth", currentuser);
      setUser(currentuser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <userAuthContext.Provider
      value={{ user, logIn, signUp, logOut, googleSignIn }}
    >
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}

export const emailLogin = ( email, password ) => {

    return ( dispatch ) => {

        dispatch( loginStart() );

        firebase.auth().signInWithEmailAndPassword( email, password )
        .then( ({ user }) => {
            dispatch( login( user.uid, user.displayName ) );
            dispatch( loginFinish() );
        })
        .catch( console.warn, dispatch( loginFinish() )  )
    };
};


export const registerUser = ( email, password, name ) => {

    return ( dispatch ) => {
        firebase.auth().createUserWithEmailAndPassword( email, password )
        .then( async({ user }) => {

            await user.updateProfile( { displayName: name } );

            dispatch(
                login( user.uid, user.displayName )
            );
        })
        .catch( console.warn )
    };
}

export const login = ( uid, displayName) => ({

    type: authTypes.login,
    payload: {
        uid,
        displayName
    }

});*/
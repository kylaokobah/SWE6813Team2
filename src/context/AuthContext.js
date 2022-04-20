import React, { createContext, useContext, useReducer, useEffect } from 'react'
import { authDb } from '../database/firebase'
import {
getAuth,
onAuthStateChanged
} from 'firebase/auth'
import { signInWithEmail, checkUserSession, signUpWithEmail, userSignOut } from '../Redux/user/user.actions'
import userReducer, {INITIAL_SATE} from '../Redux/user/user.reducer'
//import UserActionTypes from '../utils/user.types';


export const AuthContext = createContext()


export const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, user: action.payload }
    case 'LOGOUT':
      return { ...state, user: null }
    case 'AUTH_IS_READY':
      return { user: action.payload, authIsReady: true }
    default:
      return state
  }
}

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    authIsReady: false
  })

  useEffect(() => {
    const unsub = authDb.onAuthStateChanged(user => {
      dispatch({ type: 'AUTH_IS_READY', payload: user })
      unsub()
    })
  }, [])

  console.log('AuthContext state:', state)

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      { children }
    </AuthContext.Provider>
  )

}




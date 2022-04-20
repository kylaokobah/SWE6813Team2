import { AuthContext} from "../context/AuthContext"
import { useContext } from "react"

export const useAuthContext = () => {
  const context = useContext(AuthContext)

  if(!context) {
    throw Error('useAuthContext must be used inside an AuthContextProvider')
  }

  return context
}

/*import { useEffect, useState } from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

export const useAuthStatus = () => {
	const [loggedIn, setLoggedIn] = useState(false)
	const [checkingStatus, setCheckingStatus] = useState(true)

	useEffect(() => {
		const auth = getAuth()
		onAuthStateChanged(auth, user => {
			if (user) {
				setLoggedIn(true)
			}
			setCheckingStatus(false)
		})
	})

	return { loggedIn, checkingStatus }
}*/
import { useEffect, useState } from 'react'
import { authDb, firestoreDb } from '../database/firebase'
import { useAuthContext } from './useAuthContext'
import { userSignOut} from '../Redux/user/user.actions'

export const useLogout = () => {
  const [isCancelled, setIsCancelled] = useState(false)
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const { dispatch, user } = useAuthContext()
  
  const logout = async () => {
    setError(null)
    setIsPending(true)

    try {

      const { uid } = user
      await firestoreDb.collection('users').doc(uid).update({ online: false })

      // sign the user out
      await authDb.signOut()

      // dispatch logout action
      dispatch({ type: 'LOGOUT' })

      // update state
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

  return { logout, error, isPending }
}
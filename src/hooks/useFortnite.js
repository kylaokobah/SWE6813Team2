import { FortniteContext } from "../context/FortniteContext"
import { useContext } from "react"

export const useFortniteContext = () => {
  const context = useContext(FortniteContext)

  if(!context) {
    throw Error('useAuthContext must be used inside an AuthContextProvider')
  }

  return context
}
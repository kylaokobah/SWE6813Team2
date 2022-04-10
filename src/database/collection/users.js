import { authDb, firestoreDb, storageDb, googleProvider} from "../firebase";
import { collection, doc, getDoc, addDoc, setDoc, getDocs, query, updateDoc, arrayUnion, arrayRemove } from 'firebase/firestore';
import {PreviousMatchesData, PlayerComparisonData, UserData} from '../../utils/constants.js'
const COLLECTION_NAME = "user";

export const addUser = async ({
  epicName, email, password, platform
}) => {
  // Upload User Data to Firestore
  return addDoc(collection(firestoreDb, 'user'), {  epicName, email, password, platform })
}

export const getAllUsers = async () => {
  const userRefs = await getDocs(collection(firestoreDb, 'user'))
  const allUsers = []

  userRefs.forEach(user => {
    allUsers.push({
      id: user.id,
      ...user.data()
    })
  })

  return allUsers
}





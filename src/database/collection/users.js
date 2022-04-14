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
//need to write methods for assigning users random accountIDs//
export const getIdByUserID = async (id) => {
  let idu
  const userRef = collection(firestoreDb, 'user')
  const q = query(userRef, where('accountID', '==', id))

  const querySnapshot = await getDocs(q)

  querySnapshot.forEach((doc) => {
    accountID = doc.id
  })

  return accountID

}


export const userAlreadyExists = async (epicName) => {
 let userExist
  const usersRef = collection(firestoreDb, 'user')
  const q = query(usersRef, where('epicName', '==', username))

  const querySnapshot = await getDocs(q)
  querySnapshot.forEach((doc) => {
    userExist = doc.data()
  })

  return userExist?.epicName

}


export const getUserByEmail = async (email) => {
  let user
  const usersRef = collection(firestoreDb, 'user')
  const q = query(usersRef, where('email', '==', email))

  const querySnapshot = await getDocs(q)
  querySnapshot.forEach((doc) => {
    user = doc.data()
  })

  return user
}

export const getUserepicName= async (epicName) => {
  let user
  const usersRef = collection(firestoreDb, 'user')
  const q = query(usersRef, where('epicName', '==', epicName))

  const querySnapshot = await getDocs(q)
  querySnapshot.forEach((doc) => {
    user = doc.data()
  })

  return user
}


/*export const getLoggedInUser =async (displayName, email, epicName, photoURL, platform) => {
let user
const usersRef = collection(firestoreDb, 'user')
const q = query(usersRef, where('email', '==', email))

}*/





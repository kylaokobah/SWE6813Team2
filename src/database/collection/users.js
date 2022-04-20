/*import { authDb, firestoreDb, storageDb, googleProvider} from "../firebase";
import {
collection,
doc,
getDoc,
addDoc,
setDoc,
getDocs,
query,
updateDoc,
arrayUnion,
arrayRemove,
where,
Timestamp
} from 'firebase/firestore';
const COLLECTION_NAME = "user";


// Add User Data to Firestore
export const createUserProfileDocument = document.querySelector('.add')
async (userAuth, additionaData) => {
  if (!userAuth) { return; }

  const userRef = firestoreDb.doc(`user/${userAuth.accountID}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { epicName, email, photoURL } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        epicName,
        email,
        createdAt,
        avatar: photoURL,
        ...additionaData
      });
    }
    catch (error) {
      return error;
    }
  }
  return userRef;
};

//need to write methods for assigning users random accountIDs//
/*export const getIdByUserID = async (accountID) => {
  const userRef = collection(firestoreDb, 'user')
  const q = query(userRef, where('accountID', '==', accountID))

  const querySnapshot = await getDocs(q)

  querySnapshot.forEach((doc) => {
    idu = doc.id
  })

    return idu

}*/

/*export const getAllUsers = async (uid) => {
  const q = query(collection(firestoreDb, 'users'), where('uid', '!=', uid))
  const snapshot = await getDocs(q)
  if (!snapshot.empty) {
    return snapshot.docs.map((item) => item.data())
  } else {
    return []
  }
}


export const userAlreadyExists = async (epicName) => {
 let userExist
  const usersRef = collection(firestoreDb, 'user')
    const q = query(usersRef, where('epicName', '==', epicName))

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


export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = authDb.onAuthStateChanged(authDb.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }), reject);
  });
}*/






/*export const addMatchToUserHistory = async (matchID, createAt, team, didTeamWin ) => {
  const userRef = firestoreDb.doc(`/${matchID}`);
  const snapShot = await userRef.get();
  if (snapShot.exists) {
    console.log('Previous Matches:', team, didTeamWin)
    try {
      await userRef.update({
        matchHistory: firebase.firestore.FieldValue.arrayUnion(...team)
      });
    }
    catch (error) {
      return error;
    }
  }
  return userRef;
};*/







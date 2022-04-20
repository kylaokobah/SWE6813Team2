/*import { initializeApp } from 'firebase/app'
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth'
import {
  doc,
  getFirestore,
  collection,
  setDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  arrayRemove,
  arrayUnion,
  serverTimestamp
} from 'firebase/firestore'*/

// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
const firebaseConfig = {
  apiKey: "AIzaSyB5cogAS8f75cXicpobVAgexhXhGAYYPwk",
  authDomain: "gamers-meet-293c1.firebaseapp.com",
  databaseURL: "https://gamers-meet-293c1-default-rtdb.firebaseio.com",
  projectId: "gamers-meet-293c1",
  storageBucket: "gamers-meet-293c1.appspot.com",
  messagingSenderId: "596714399514",
  appId: "1:596714399514:web:aaf6c9c46b9fd19ca26ea3",
  measurementId: "G-762EHGXZ1H"
};



/*/initialize firebase app
const firebase = initializeApp(firebaseConfig);
//init database
const firestoreDb = getFirestore(firebase)
// Authentication
const authDb = getAuth()
// Storage
const storageDb = getDoc
//gets player profile collection in database
const colRef = collection(firestoreDb, 'player_profile' )
//user thumbnail storage
const userRef= ref(storage, photoURL)

//get collection data
//retrieves all data in collection
     getDocs(colRef)
    .then((snapshot) => {
     let player_profile = []
     snapshot.docs.forEach((doc)=>{
     player_profile.push({...doc.data(), id: doc.id})
     })
     console.log(player_profile)
    })
    .catch(err =>{
        console.log(err.message)
    })

// timestamp
//const timestamp = firebase.firestore.Timestamp

// Provider
const googleProvider = new GoogleAuthProvider();

export { authDb, firestoreDb, storageDb, googleProvider};*/




//   init firebase
firebase.initializeApp(firebaseConfig)

// init firestore
const firestoreDb = firebase.firestore()

// init auth
const authDb = firebase.auth()

// timestamp
const timestamp = firebase.firestore.Timestamp

// init storage
const storageDb = firebase.storage()


export { firestoreDb, authDb, timestamp, storageDb }
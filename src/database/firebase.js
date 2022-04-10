import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider} from "firebase/auth";
import { getStorage } from "@firebase/storage";
import firebase from 'firebase/compat/app';



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

//initialize firestore
const app = initializeApp(firebaseConfig);
const firestoreDb = getFirestore(app);
// Authentication
const authDb = getAuth(app);
// Storage
const storageDb = getStorage(app);

// timestamp
//const timestamp = firebase.firestore.Timestamp

// Provider
const googleProvider = new GoogleAuthProvider();

export { authDb, firestoreDb, storageDb, googleProvider};

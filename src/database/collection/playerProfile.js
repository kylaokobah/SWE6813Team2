/*import { useEffect, useState, useRef } from "react"
import { firestoreDb } from "../firebase"

export const createFortniteProfileDocument = async (userAuth, additionaData)
aboutMe,
epicName,
isOnline,
killPerMatch,
language,
lastOnlineDate,
matchesPlayed,
timePlayed,
winPercentage) => {

    if (epicName === null) { return; }

         const userRef = firestoreDb.doc(`player_profile/${userAuth.uid}`);
          const snapShot = await userRef.get();
            if (!snapShot.exists) {
                 const { displayName, email, photoURL } = userAuth;
                     const createdAt = new Date();
            try {
                await userRef.set({
                displayName,
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


const [language,setLanguage] = useState('');
  const [matchesPlayed,setMatchesPlayed] = useState('');
  const [numSolo,setNumSolo] = useState('');
  const [numDuo,setNumDuo] = useState('');
  const [numSquad,setNumSquad] = useState('');
  const [numTrio,setNumTrio] = useState('');
  const [timePlayed,setTimePlayed] = useState('');
  const [winPercentage,setWinPercentage] = useState('');*/




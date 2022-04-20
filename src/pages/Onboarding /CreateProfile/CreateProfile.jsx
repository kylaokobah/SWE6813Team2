
import { updateProfile } from '@firebase/auth';
import { doc, setDoc } from '@firebase/firestore';
import React, { useRef, useState } from 'react'
import { authDb, firestoreDb } from '../../../database/firebase';
import MessageBar from '../../../components/MessageBar/messageBar';
import styles from "./createProfile.module.scss";
import {useNavigate, useParams} from "react-router-dom";

function CreateProfile() {
  const [epicName,setEpicName] = useState('');
  const [platform,setPlatform] = useState('');
  const [language,setLanguage] = useState('');
  const [matchesPlayed,setMatchesPlayed] = useState('');
  const [numSolo,setNumSolo] = useState('');
  const [numDuo,setNumDuo] = useState('');
  const [numSquad,setNumSquad] = useState('');
  const [numTrio,setNumTrio] = useState('');
  const [timePlayed,setTimePlayed] = useState('');
  const [winPercentage,setWinPercentage] = useState('');
  const [bio,setBio] = useState('');

  const [message,setMessage] = useState(null);
  let navigate = useNavigate();
  let params = useParams();

  const submitForm = async(e) => {
    e.preventDefault();  
    
    try {
      updateProfile(authDb.currentUser, {
        epicName
      })
      let t = await setDoc(doc(firestoreDb,"player_profile", authDb.currentUser.uid), {
        aboutMe: bio,
        isOnline: true,
        platform,
        language,
        matchesPlayed,
        numSolo,
        numDuo,
        numSquad,
        numTrio,
        timePlayed,
        winPercentage
      });
      console.log(t);
      setMessage({text: 'Profile successfully created', isError:false})
      navigate(`/onboarding/${params.userId}/GamingGoals`,{replace: true});

    } catch(err) {
      setMessage({text:'Oops! Your profile could not be created', isError: true})
    }
  }

  const handleChange = (e,setValue) => {
    setValue(e.target.value);
  }

  return (
    <div className={styles.createProfileSection}>
      <header className={styles.createProfileHeader}>
        <h4 className={styles.title}>Create Profile</h4>
        <p>When creating your profile, others users will see it </p>
      </header>
      <form onSubmit={submitForm} className={styles.createProfileForm}>
        <img  />
        <div className={styles.formContent}>
          <label htmlFor='username'>Username</label>
          <input type='text' value={epicName} name='Epic name' onChange={(e) => handleChange(e,setEpicName)} />
          <label htmlFor='bio'>About Me</label>
          <textarea type='text' name='bio' value={bio} onChange={(e) => handleChange(e,setBio)} />
          <button type='submit'>Next</button>
        </div>
      </form>
      <MessageBar message={message?.text} isError={message?.isError} />
    </div>
  )
}

export default CreateProfile

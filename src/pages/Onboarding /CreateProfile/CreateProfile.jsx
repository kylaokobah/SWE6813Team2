import React, { useRef, useState } from 'react'
//firebase
import { updateProfile } from '@firebase/auth';
import { doc, setDoc } from '@firebase/firestore';
import { authDb, firestoreDb } from '../../../database/firebase';
//components
import MessageBar from '../../../components/MessageBar/messageBar';
import PlatformButton from '../../../components/PlatformButton/PlatformButton'
import styles from "./createProfile.module.scss";
//routing
import {useNavigate, useParams} from "react-router-dom";
//Redux
import { useSelector, useDispatch } from 'react-redux';
import {
    fetchProfile,
    setProfile,
    setSearchValue,
    toggleToCompare,
    clearCompares,
    clearRecentlySearched,
    setSelectedPlatform
} from '../../../Redux/fortnite/actions';
import {
    getProfileUsernames,
    getProfileByUsername,
    getErrorMessage,
    getActiveProfile,
    getSearchValue,
    getProfilesToCompare,
    getCompareRows,
    isLoading,
    getSelectedPlatform
} from '../../../Redux/fortnite/selectors';

  function CreateProfile() {
  const [epicName,setEpicName] = useState('');
  const [platform,setPlatform] = useState('');
  const [compareView, setCompareView] = useState('all');
  const [bio,setBio] = useState('');
  const [message,setMessage] = useState(null);

      // Redux
      const dispatch = useDispatch();
      const profileUsernames = useSelector(getProfileUsernames);
      const profileCompareRows = useSelector((state) => getCompareRows(state, compareView));
      const profilesToCompare = useSelector(getProfilesToCompare);
      const activeProfile = useSelector(getActiveProfile);
      const searchValue = useSelector(getSearchValue);
      const error = useSelector(getErrorMessage);
      const user = useSelector((state) => getProfileByUsername(state, activeProfile))
      const loading = useSelector(isLoading);
      const platform = useSelector(getSelectedPlatform);

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
      navigate(`/onboarding/${params.userId}/gamingGoals`,{replace: true});

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
          <label htmlFor='epicName'>Epic name</label>
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

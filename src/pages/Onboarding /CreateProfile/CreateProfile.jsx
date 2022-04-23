import React, { useRef, useState } from 'react'
//firebase
import { updateProfile } from '@firebase/auth';
import { doc, setDoc } from '@firebase/firestore';
import { authDb, firestoreDb } from '../../../database/firebase';
//components
import MessageBar from '../../../components/MessageBar/messageBar';
import styles from "./createProfile.module.scss";
import SearchSection from '../../../components/SearchSection/SearchSection';
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
    getSelectedPlatformButton
} from '../../../Redux/fortnite/selectors';
//materialUI imports
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import LinearProgress from '@material-ui/core/LinearProgress';
import LoadingButton from '@mui/lab/LoadingButton';
import reducer from '../../../Redux/fortnite/reducers.js'


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
    const [compareView, setCompareView] = useState('all');
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
      const platformButton = useSelector(getSelectedPlatformButton);

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
      <form onSubmit={submitForm}>
        <img  />
        <div className={styles.formContent}>
         <SearchSection
                  value={searchValue}
                  onChange={username => dispatch(setSearchValue(username))}
                  onEnter={() => dispatch(fetchProfile(searchValue, platform))}
                  onSelectPlatform={(platform) => dispatch(setSelectedPlatform(platform))}
                  selectedPlatform={platform}
                  />
                    { loading && (
                        <LinearProgress className={styles.loading} />
                    )}
          <label htmlFor='epicName'>Epicname</label>
          <input type='text' value={epicName} name='Please enter your Fortnite Epic name:' onChange={(e) => handleChange(e,setEpicName)} />
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

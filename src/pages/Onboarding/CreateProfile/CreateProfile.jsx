import React, { useRef, useState } from 'react'
   //firebase
   import { updateProfile } from '@firebase/auth';
   import { doc, setDoc } from '@firebase/firestore';
   import { authDb, firestoreDb } from '../../../database/firebase';
   //components
   import MessageBar from '../../../components/MessageBar/messageBar';
   import styles from "./createProfile.module.scss";
   import SearchSection from '../../../components/SearchAppBar/SearchSection';
   //routing
   import {useNavigate, useParams} from "react-router-dom";

   //Redux
   import { useSelector, useDispatch } from 'react-redux';

   //materialUI imports
   import InputLabel from '@mui/material/InputLabel';
   import MenuItem from '@mui/material/MenuItem';
   import FormControl from '@mui/material/FormControl';
   import Select, { SelectChangeEvent } from '@mui/material/Select';
   import Box from '@mui/material/Box';
   import Input from '@mui/material/Input';
   import LoadingButton from '@mui/lab/LoadingButton';


       function CreateProfile() {
       const [epicName,setEpicName] = useState('');
       const [platform,setPlatform] = useState('');
       const [matchesPlayed,setMatchesPlayed] = useState();
       const [winsTotal,setWinsTotal] = useState();
       const [kd,setKd] = useState();
       const [kills,setKills] = useState();
       const [timePlayed,setTimePlayed] = useState();
       const [winPercentage,setWinPercentage] = useState();
       const [bio,setBio] = useState('');
       const [message,setMessage] = useState(null);

 //API
   const Faker = require("@faker-js/faker");
   const faker = Faker.faker;

     let navigate = useNavigate();
     let params = useParams();

     const submitForm = async(e) => {
     e.preventDefault();
      const winsTotal= faker.datatype.number({min:1, max:999999});
                        const matchesPlayed= faker.datatype.number({min:1, max:999999});
                        const kills= faker.datatype.number({min:1, max:99999});
                        const kd= faker.datatype.float({min: .01, max:4, fixed: 2})
                        const time= faker.datatype.number({min:60});

                                 //calculations
                                 const timePlayed= time/60;
                                 const winPercentage= winsTotal/matchesPlayed;

       try {
         updateProfile(authDb.currentUser, {
           epicName

         })
         let t = await setDoc(doc(firestoreDb,"player_profile", authDb.currentUser.uid), {
           aboutMe: bio,
           isOnline: true,
           //matchesPlayed: faker.datatype.number({min:1, max:999999}),
           timePlayed,
           kills,
           kd,
           winsTotal,
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
             <label htmlFor='epicName'>Epicname</label>
             <input type='text' value={epicName} name='Please enter your Fortnite Epic name:' onChange={(e) => handleChange(e,setEpicName)} />
             <label htmlFor='bio'>About Me</label>
             <textarea type='text' name='bio' value={bio} onChange={(e) => handleChange(e,setBio)} />

             <button type='submit'>Next</button>
         </form>
       </div>
     )
   }

   export default CreateProfile
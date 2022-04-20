import React, { useState } from 'react'
import styles from "./GamingGoals.module.scss";
import {BiBrain, BiGroup} from "react-icons/bi";
import {RiBookOpenLine} from "react-icons/ri";
import { authDb, firestoreDb } from '../../../database/firebase';
import { doc, setDoc, updateDoc } from '@firebase/firestore';
import { useNavigate } from 'react-router';




const gamingGoalsList = [{
  id: 0,
  name: 'I want to win all the games I play!',
  selected: false
}, {
  id: 1,
  name: 'I want to get more experience playing Fortnite!',
  selected: false
}, {
  id: 2,
  name: 'I want to play Fortnite as a team player!',
  selected: false
}]

const gamingGoalIcons = [<BiBrain /> , <BiGroup />, <RiBookOpenLine />]

const gamingTypes = ['Aggressive', 'Casual'];

function GamingGoals() {
  const [gamingGoals, setGoals] = useState(gamingGoalsList)
  const [gamingType, setType] = useState();
  const navigate = useNavigate();

  const selectGoals = (index) => {
      let gamingGoalsCopy = [...gamingGoals];
      gamingGoalsCopy[index].selected = true;

      setGoals(gamingGoalsCopy);
  
  }

  const submitSection = async() => {
    const selectedGoals = gamingGoals.filter(goal => goal.selected)
    .map(goal => goal.id);
   
    try {
       let test = await updateDoc(doc(firestoreDb,"player_profile", authDb.currentUser.uid), {
        gamingGoals: selectedGoals,
        gamingType: gamingType
      });
      navigate(`/dashboard`,{replace: true});

    } catch(err) {
      console.log(err);
    }
  }

  return (
    <div className={styles.gamingGoals}>
      <div className={styles.inner}>
        <header className={styles.gamingHeader}>
          <h4>Tell us your Gaming goals</h4>
          <p>Filling out this section helps us offer you more personalized content</p>
        </header>
        <div className={styles.subContent}>
          <h5 className={styles.subHeading}> Why are you looking for Gaming Partners? </h5>
          <div className={styles.gamingGoalsContent}>
            {gamingGoals?.map((goal,index) => {
              return (
                <div onClick={() => selectGoals(index)} className={`${styles.gamingGoalItem} ${goal.selected ? styles.selected : ''}`}>
                  {gamingGoalIcons[index]}
                  {goal.name}
                </div>
              )
            })}
        </div>
        </div>
        <div className={styles.subContent}>
          <h5 className={styles.subHeading}>What Is Your Online Playing Style?</h5>
          <div className={styles.gamingTypes}>
            {gamingTypes.map((type,index) => {
              return (
                <div onClick={() => setType(index)} className={`${styles.gamingType} ${index == gamingType ? styles.selected : ''}`}>
                  <div style={{backgroundImage: 'url(https://cdn.dribbble.com/users/1355613/screenshots/13618145/media/2d37a0661dc66e6c9b260246f1db2b23.png?compress=1&resize=400x300)'}}  className={`${styles.img} `} />
                  <p>{type}</p>
                </div> 
              )
            })}
          </div>
        </div>
      </div>
      <button onClick={submitSection}>Next</button>
    </div>
  )
}

export default GamingGoals

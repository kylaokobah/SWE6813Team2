import React from 'react'
import styles from "./mentorCard.module.scss";
import {FiBriefcase} from "react-icons/fi";
import {HiOutlineLocationMarker} from "react-icons/hi";
import {MdWavingHand} from "react-icons/md";
import { useParams } from 'react-router-dom'
import { useDocs } from '../../database/collection/useDocs'
import { useCollection } from '../../database/collection/useCollection'
import { useFirestore } from '../../database/collection/useFirestore'
import skillSummary from '../matchCard/skillSummary'
import matchComments from '../matchCard/matchComments.js'
import { useNavigate } from 'react-router-dom'
import { useAuthContext } from '../../hooks/useAuthContext'
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';


function MentorCard({onClick, name,age,img, kills, winTotal, timePlayed, RandomPlatform, createdAt }) {
 const { documents } = useCollection('users')
    const { user } = useAuthContext()
    const { addDocument, response } = useFirestore('find_match')
    const navigate = useNavigate()


 return (
    <div onClick={onClick} className={styles.card}>

      <div className={styles.cardContent}>
        <div className={styles.cardContextText}>
          <div className={styles.contentHeader}>
            <div className={styles.textBox}>
              <h4>{name}</h4>
              <p> Account Id: {age} </p>
            </div>
            <div className={styles.cardImage} style={{backgroundImage:`url(${img})`}} />
          </div>
          <div className={styles.userInfo}>
            <div className={styles.textBox}>

                Joined date: {createdAt}
            </div>
            </div>
            <div className={styles.textBox}>
            <SportsEsportsIcon />

             {RandomPlatform}

            </div>

          <div className={styles.flexSection}>
            <div className={styles.tag}> Total Kills: {kills} </div>
            <div className={styles.tag}> Wins Total: {winTotal} </div>
            <div className={styles.tag}> Time Played: {timePlayed} hours </div>
          </div>
          <div className={styles.interestsSection}>

            <h4>Interests</h4>
            <div className={styles.flexSection}>
              <div className={styles.interestTag}>Photography</div>
              <div className={styles.interestTag}>Cooking</div>
              <div className={styles.interestTag}>Travelling</div>
              <MdWavingHand />
            </div>
          </div>
        </div>

      </div>
    </div>
  )

}



export default MentorCard;
import React from 'react'
import styles from "./mentorCard.module.scss";
import {FiBriefcase} from "react-icons/fi";
import {HiOutlineLocationMarker} from "react-icons/hi";
import {MdWavingHand} from "react-icons/md";


function MentorCard({onClick, name,age,img}) {
  return (
    <div onClick={onClick} className={styles.card}>
      <div className={styles.cardImage} style={{backgroundImage:`url(${img})`}} />
      <div className={styles.cardContent}>
        <div className={styles.cardContextText}>
          <div className={styles.contentHeader}>
            <div className={styles.textBox}>
              <h4>{name}</h4>
              <p> Account Id: {age} </p>
            </div>
            <div className={styles.userConnection}>
              <MdWavingHand />
            </div>
          </div>
          <div className={styles.userInfo}>
            <div className={styles.textBox}>
              <HiOutlineLocationMarker />
              <p>Canada</p>
            </div>
            <div className={styles.textBox}>
              <FiBriefcase  />
              <p> <span className={styles.accentText}>Junior Developer</span> at <span className={styles.accentText}>Facebook</span> </p>
            </div>
          </div>
          <div className={styles.flexSection}>
            <div className={styles.tag}> Leadership </div>
            <div className={styles.tag}> Coding </div>
            <div className={styles.tag}> Design </div>
          </div>
          <p className={styles.bio}>  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore  </p>
          <div className={styles.interestsSection}>
            <h4>Interests</h4>
            <div className={styles.flexSection}>
              <div className={styles.interestTag}>Photography</div>
              <div className={styles.interestTag}>Cooking</div>
              <div className={styles.interestTag}>Travelling</div>
            </div>
          </div>
        </div>
        <button className={styles.visitProfileButton} onClick= {onClick}>Visit Profile</button>
      </div>
    </div>
  )
}

export default MentorCard;
import { useFirestore } from '../../database/collection/useFirestore'
import { useAuthContext } from '../../hooks/useAuthContext'
import { useNavigate } from 'react-router-dom'
import Avatar from '../../components/Avatar/Avatar'
import React from 'react'
import styles from "../../styles/Profilestyles.module.scss";
import {IoLogoFacebook} from "react-icons/io";
import { RiLinkedinFill } from 'react-icons/ri';

function skillSummary ({onClick, name,age,img}) {
  return (
    <div className={styles.profileWrapper}>
      <i className="fa-solid fa-xmark" />
      <div onClick={onClick} className={styles.background} />
      <div className={styles.profileModal}>
        <div className={`${styles.inner} ${styles.profileHeader}`}>
          <div style={{backgroundImage:`url(${img})`}} className={styles.profileImage} />
          <div className={styles.textContent}>
            <div className={styles.textHeader}>
              <h4>{name}</h4>
              <p>{age}</p>
              <button className={styles.chatButton}>Chat</button>
              <div className={styles.socialsFlex}>
                <RiLinkedinFill/>
                <IoLogoFacebook />
              </div>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.Lorem ipsum dolor.</p>
          </div>
        </div>
        <div className={` ${styles.profileContent} ${styles.inner}`}>
          <div className={styles.flexItem}>
            <h6 className={styles.subHeading}>
              Skills
            </h6>
            <div className={styles.flexSection}>
              <div className={styles.tag}>
                  Design Thinking
              </div>
              <div className={styles.tag}>
                  Leadership
              </div>
              <div className={styles.tag}>
                  Web Development
              </div>
            </div>
          </div>
          <div className={styles.flexItem}>
            <h6 className={styles.subHeading}>
              Interests
            </h6>
            <div className={styles.flexSection}>
              <div className={styles.tag}>
                  Cooking
              </div>
              <div className={styles.tag}>
                  Photography
              </div>
              <div className={styles.tag}>
                  Travelling
              </div>
            </div>
          </div>
        </div>
        <div className={styles.workExperience}>
          <div className={styles.inner}>
            <div>
              <h6 className={styles.smallHeading}>Previous experience</h6>
              <p>Worked as a <span>Lead Designer</span> for <span>Google</span></p>
            </div>
            <div>
              <h6 className={styles.smallHeading}>Wants to learn</h6>
              <p>How to become an <span>Electrician</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default skillSummary

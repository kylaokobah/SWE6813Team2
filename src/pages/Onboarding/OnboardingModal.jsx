import React, { useState } from 'react'
import styles from "./onboarding.module.scss";
import {CgProfile} from "react-icons/cg";
import {BsFlag} from "react-icons/bs";
import {GiPartyPopper} from "react-icons/gi";
import CreateProfile from './CreateProfile/CreateProfile';
import { NavLink,Route,Routes, useParams } from 'react-router-dom';
import GamingGoals from './DreamTeam/GamingGoals';

const onboardingSections = [{
  icon: <CgProfile />,
  text: 'Create Profile',
  link: 'createProfile'
}, {
  icon: <BsFlag />,
  text: 'Gaming Goals',
  link: 'GamingGoals'
} ]

function OnboardingModal() {
  let params = useParams();
  console.log(params['*']);
  return (
    <div className={styles.modalWrapper}>
      <div className={styles.modal}>
        <aside className={styles.modalSidebar}>
          {onboardingSections.map((section, index) => {
            let onboardingPath = params['*'];
              return (
                  <div className={`${styles.sidebarItem} ${section.link === onboardingPath ? styles.selected : ''} `}>
                    {section.icon}
                    <p>{section.text}</p>
                  </div>
              )
          })}
        </aside>
        <div className={styles.inner}>
          <Routes>
            <Route path='createProfile' element={<CreateProfile />} />
            <Route path='GamingGoals' element={<GamingGoals />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default OnboardingModal;

import React from 'react'
import Profile from '../Profile/Profile';
import AccountSidebar from './AccountSidebar/AccountSidebar'
import styles from "./styles.module.scss";


function ProfilePage() {

  return (
    <div className={styles.profileWrapper}>
      <AccountSidebar />
      <div className={styles.profileContent}>
        <div className={styles.createProfileSection}>
          <header className={styles.createProfileHeader}>
            <div className={styles.textBox}>
              <div className={styles.profile}></div>
              <p>Sarah K</p>
            </div>
          </header>
          <form className={styles.createProfileForm}>
            <label htmlFor="Name">Name</label>
            <input name="Name" placeholder="Ex. John Doe" />
            <label htmlFor="Bio">Biography</label>
            <textarea name="Bio" placeholder="Ex. John Doe" />
          </form>
        </div>
        <div className={styles.addProfileImage}>
          <img className={styles.profileImage} />
          <input type='file' />
        </div>
      </div>
    </div>
  )
}

export default ProfilePage

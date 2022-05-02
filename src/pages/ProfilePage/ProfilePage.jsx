import React from 'react'
import styles from "../../styles/Profilestyles.module.scss"
//hooks
import { useAuthContext } from '../../hooks/useAuthContext'

function ProfilePage() {
const { user } = useAuthContext()
  return (
    <div className={styles.profileWrapper}>

      <div className={styles.profileContent}>
        <div className={styles.createProfileSection}>
          <header className={styles.createProfileHeader}>
            <div className={styles.textBox}>
              <div className={styles.profile}></div>
               <p>hey {user.epicName}!</p>
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

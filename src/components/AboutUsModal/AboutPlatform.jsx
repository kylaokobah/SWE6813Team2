import React from 'react'
import styles from "./AboutPlatform.module.scss";
function AboutPlatform({onHide}) {
  return (
    <div className={styles.modalWrapper}>
      <div onClick={onHide} className={styles.background} />
      <div className={styles.modal}>
        <header className={styles.headerContent}>
          <p>Get Started | </p>
        </header>
        <div className={styles.bodyContent}>
          <div className={styles.textBox}>
            <h4 className={styles.heading}>We understand that mentorship is hard</h4>
            <p>but we want to help make it easier. Using our platform you can</p>
          </div>
          <div className={styles.flexBox}>
            <div className={styles.img} />
            <div className={styles.textBox}>
            <h4 className={styles.subHeading}>Exchange your 
skillsets with others</h4>
            <p>Using our platform, you can learn a new skillset like design while teaching others your specialty</p>
            </div>
          </div>
          <div className={styles.flexBox}>
            <div className={styles.img} />
            <div className={styles.textBox}>
            <h4 className={styles.subHeading}>Join our weekly mixer</h4>
            <p>Scheduling time for mentoring can be difficult. If you want a more casual approach with less commitment, join our weekly mixer via video chat. </p>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default AboutPlatform

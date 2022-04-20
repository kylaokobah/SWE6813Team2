import React from 'react'
import styles from "./messageBar.module.scss";
function MessageBar({message, isError=false}) {
  const messageStyling = isError ? styles.error : styles.success;

  if (!message) return null;
  return (
    <div className={`${styles.messageBar} ${messageStyling}`}>
      <div className={styles.inner}>
        <div className={styles.icon}></div>
        <p>{message}</p>
      </div>
    </div>
  )
}

export default MessageBar

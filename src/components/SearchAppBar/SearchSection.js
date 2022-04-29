import React from 'react'
import styles from "./SearchSection.module.scss"



const onKeyDown = (e, onEnter) => {
    const key = e.which || e.keyCode;
    if (key === 13) {
        // enter
        onEnter(e);
    }
};
function SearchSection({options}) {
  return (
  <div className={styles.searchSection}>
    <input type='text' placeholder="Please enter your Epic username" />


  </div>
  )
}


export default SearchSection
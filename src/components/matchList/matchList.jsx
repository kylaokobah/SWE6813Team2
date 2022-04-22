import React, { useState, useEffect } from 'react'
import matchProfile from '../matchCard/matchProfile';
import matchCard from '../matchCard/matchCard'
import styles from "./matchList.module.scss";


function MatchList({arr}) {
  const [selected,setSelected] = useState(null);
  const [open,setOpen] = useState(false);
  const [width,setWidth] = useState(window.innerWidth);

  const availableCardSpace = Math.floor(width/300);

  const openMatchProfile = (id) => {
    setSelected(id);
    setOpen(true);
  }

  return (
    <>
    <div className={styles.match}>
      {arr.map((card,index) => {
        return (
          <matchCard onClick={() => openMatchProfile(index)} {...card} />
        )
      })}
    </div>
    {open && <matchProfile onClick={() => setOpen(false)} {...arr[selected]} /> }
    </>
  )
}

export default MatchList;

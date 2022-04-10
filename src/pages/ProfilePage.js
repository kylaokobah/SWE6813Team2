import React, {useEffect, useContext, useRef, useState } from 'react'
import {useFortniteContext} from '../hooks/useFortnite'
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import fortniteImg from '../assets/images/fortnite-logo.png'

const ProfilePage = () => {
//fortnite
 const [copiedText, setCopiedText] = useState(false);
const context_values = useContext(useFortniteContext);
const { fortniteValues } = context_values;
const accountIDRef = useRef();

 function handleCopyAccountID() {
    const textArea = document.createElement("textarea");
    textArea.value = accountIDRef.current.innerText;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("Copy");
    textArea.remove();
    setCopiedText(true);
    setTimeout(() => {
      setCopiedText(false);
    }, 2000);
  }


    return (
       <div className="dashboard-container fortnite-dashboard-container">
         <div className="title">
            <img src={fortniteImg} alt="" className="game-img" />
           <p className="game-username">{fortniteValues.profile.name}</p>
         </div>
         <div className="box fortnite-box">
           <div className="fortnite-profile box-column">
             <div className="box-title">
               <p>Profile</p>
             </div>
             <div className="box-content">
               <span className="username">{fortniteValues.profile.name}</span>
               <span className="platform">{fortniteValues.profile.platform}</span>
               <div
                 className={`wrapper-account-id ${
                   copiedText ? "copied-text-show" : "copied-text-hide"
                 }`}
                 title="copy account id"
                 onClick={handleCopyAccountID}
               >
                 <span className="account-id hide" ref={accountIDRef}>
                   {fortniteValues.profile.account_id}
                 </span>
                 <span className="account-id show">Account ID</span>
                 <FontAwesomeIcon
                   icon={faCopy}
                   className="copy-icon"
                 ></FontAwesomeIcon>
               </div>
             </div>
           </div>
           <div className="fortnite-stats box-column">
             <div className="box-title">
               <p>Stats</p>
             </div>
             <div className="box-content">
               <span className="k-d">
                 {fortniteValues.stats.kill_death_ratio}
                 <span className="value-title">K/D</span>
               </span>
               <span className="score">
                 {fortniteValues.stats.score}
                 <span className="value-title">score</span>
               </span>
             </div>
           </div>
           <div className="fortnite-matches box-column">
             <div className="box-title">
               <p>Matches</p>
             </div>
             <div className="box-content">
               <span className="total-matches">
                 {fortniteValues.matches.total}
                 <span className="value-title">matches</span>
               </span>
               <span className="total-wins">
                 {fortniteValues.matches.win}
                 <span className="value-title">wins</span>
               </span>
               <span className="total-win-percent">
                 {fortniteValues.stats.win_percent}
                 <span className="value-title">win percentage</span>
               </span>
               <span className="total-top3">
                 {fortniteValues.stats.top_3s}
                 <span className="value-title">top 3s</span>
               </span>
             </div>
           </div>
           <div
             className={`fortnite-recent-match box-column ${
               !fortniteValues.recent_match ? "not found" : ""
             }`}
           >
             <div className="box-title">
               <p>Recent Match</p>
             </div>
             <div className="box-content">
               {!fortniteValues.recent_match ? (
                 <p className="no-recent-match-text">
                   Oops, seems like we can't find any recent matches ..
                 </p>
               ) : (
                 <>
                   <span className="status">
                     {fortniteValues.recent_match.win ? "Win" : "Lose"}
                   </span>
                   <span className="duration">
                     {fortniteValues.recent_match.duration}
                     <span className="value-title">min</span>
                   </span>
                   <span className="kill">
                     {fortniteValues.recent_match.kill}
                     <span className="value-title">kill(s)</span>
                   </span>
                   <span className="matchID">
                     {fortniteValues.recent_match.matchID}
                     <span className="value-title">match ID</span>
                   </span>
                 </>
               )}
             </div>
           </div>
         </div>
       </div>
     );
   }

export default ProfilePage;
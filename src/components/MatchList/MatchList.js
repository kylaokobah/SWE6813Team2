import MentorCard from './MentorCard'
import staticUsersDb from './staticUsersDb'
import '../../styles/matchList.css'

import React from 'react'

export default function MatchList({ match }) {

    return (

        <div className='match-list'>
            {match && match.slice(0,10).map(user => (

               <>
                    <MentorCard name={user.EpicName} age={user.userId} img={user.photoURL} />
               </>
            ))}
        </div>

    )
}
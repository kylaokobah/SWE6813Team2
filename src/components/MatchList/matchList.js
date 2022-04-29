import { Link } from 'react-router-dom'
import Avatar from '../Avatar/Avatar'
import '../../styles/matchList.css'

import React, { useEffect, useState } from 'react'

import firebase from 'firebase/app';
import {MATCHDATA} from '../../utils/consts';
import {RandomGamingGoals, RandomGamingType, RandomPlatform, RandomTeamSize} from '../../mock-utils/mockQuiz'
import useCollection from '../../database/collection/useCollection';



export default function MatchList({ findAmatch }) {
    return (
        <div className='match-list'>
            {findAmatch.length === 0 && <p>No matches just yet!</p>}
            {findAmatch.map(findAmatch => (
                <Link to={`findAmatch/${findAmatch.id}`} key={findAmatch.id}>
                    <h4>{findAmatch.name}</h4>

                    <div className='matched-with'>
                        <ul>
                            {findAmatch.MatchedUsersList.map(user => (
                                <li key={user.id}>
                                    <Avatar src={user.photoURL} />
                                </li>
                                
                            ))}
                        </ul>
                    </div>
                </Link>
            ))}
        </div>

    )
}
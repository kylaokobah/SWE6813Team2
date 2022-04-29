import { Link } from 'react-router-dom'
import Avatar from '../Avatar/Avatar'
import '../../styles/matchList.css'

import React, { useEffect, useState } from 'react'

import firebase from 'firebase/app';
import {MATCHDATA} from '../../utils/consts';
import {RandomGamingGoals, RandomGamingType, RandomPlatform, RandomTeamSize} from '../../mock-utils'
import useCollection from './collection/useCollection';



export default function MatchList({ MatchService }) {
    return (
        <div className='match-list'>
            {match.length === 0 && <p>No matches just yet!</p>}
            {match.map(match => (
                <Link to={`findAmatch/${match.id}`} key={match.id}>
                    <h4>{match.name}</h4>

                    <div className='matched-with'>
                        <ul>
                            {match.MatchedUsersList.map(user => (
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
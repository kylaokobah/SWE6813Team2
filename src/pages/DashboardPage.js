import MatchedUserList from '../components/MatchList/MatchList'
import { useCollection } from '../database/collection/useCollection'
// import matchFilter from '../components/MatchList/matchFilter'
import { useState } from 'react'
import { useAuthContext } from '../hooks/useAuthContext'

import '../styles/Dashboard.css'
import Sidebar from '../components/Nav/Sidebar'
import OnlineUsers from "../components/OnlineUsers/OnlineUsers"

export default function Dashboard() {

    const { documents, error } = useCollection('users')
    const { user } = useAuthContext()

    /*const changeFilter = (newFilter) => {
        setCurrentFilter(newFilter)
    }*/
    const users = documents
    /*? documents.filter((document) => {
        switch(currentFilter) {
            case 'all':
                return true
            case 'mine':
                let matchedWithMe = false
                document.matchedUsersList.forEach(u => {
                    if (u.id === user.uid) {
                       matchedWithMe = true
                    }
                })
                return matchedWithMe
            case 'best':
            case 'personality':
            case 'stats':

                return (document.category === currentFilter)
            default:
                return true
        }
    }) : null*/
    return (
        <>
            <Sidebar />
            <div>
                <h2 className='page-title'>Gamers Meet Dashboard</h2>
                {error && <p className='error'>{error}</p>}
                {/* {documents && <matchFilter

                />} */}
                {users  && <MatchedUserList match={ users } />}
            </div>
            <OnlineUsers/>
        </>
    )
}
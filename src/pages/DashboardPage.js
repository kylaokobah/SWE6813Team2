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


    const users = documents

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



import React from 'react'
import { useCollection } from '../../database/collection/useCollection'
//components
import Avatar from '../Avatar/Avatar'
//styling
import '../../styles/OnlineUsers.css'
//hooks
import { useAuthContext } from '../../hooks/useAuthContext'


export default function OnlineUsers() {
    const { user } = useAuthContext();

    const { documents, error } = useCollection("user");

    return(
        <div className='user-list'>
            <h2>All Users</h2>
            {error && <div className='error'>{error}</div>}
            {documents && documents.map(user => (
                <div key={user.id} className='user-list-item'>
                    {user.online && <span className='online-user'></span>}
                    <span>{user.epicName}</span>
                    <Avatar src={user.photoURL} />
                </div>
            ))}
        </div>
    )
}
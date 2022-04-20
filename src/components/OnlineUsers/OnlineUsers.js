import { useCollection } from '../../database/collection/useCollection'
import Avatar from '../Avatar/Avatar'

import '../../styles/OnlineUsers.css'

export default function OnlineUsers() {

    const { documents, error } = useCollection('player_profile')

    return(
        <div className='user-list'>
            <h2>all users</h2>
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
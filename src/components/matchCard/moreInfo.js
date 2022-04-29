import { Link } from 'react-router-dom'
import Avatar from '../Avatar/Avatar'
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import '../styles/matchList.css'

export default function moreInfo ({ match }) {
    return (
        <div className='match-list'>
            {match.length === 0 && <p>Hold on! Our system is finding the best gaming partner  yet</p>}
            {match.map(match => (
                <Link to={`match/${match.id}`} key={match.id}>
                    <h4>{match.name}</h4>
                    <p>: {match.joinDate()}</p>
                    <div className='Does this player look like a match?'>

                     <IconButton aria-label="add to favorites">
                       <FavoriteIcon />
                         </IconButton>
                        <ul>
                            {match.assignedUsersList.map(user => (
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
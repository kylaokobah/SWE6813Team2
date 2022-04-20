import { NavLink, Link } from 'react-router-dom'
//components
import Avatar from '../Avatar/Avatar'
import OnlineUsers from '../OnlineUsers/OnlineUsers'
//styling
import '../../styles/Sidebar.css'
//icons for nav links
import DashboardIcon from '../../assets/images/dashboard_icon.svg'
import AddIcon from '../../assets/images/add_icon.svg'
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
//hooks
import { useAuthContext } from '../../hooks/useAuthContext'
//firebase auth
import { authDb } from '../../database/firebase'
import { signOut } from '@firebase/auth';



export default function Sidebar() {

const signOutUser = async() => {
      try {
          await signOut(authDb);
      } catch (err) {
          console.log(err)
      }
  }

    const { user } = useAuthContext()

    return (
        <div className='sidebar'>
            <div className='sidebar-content'>
                <div className='user'>
                    <Avatar src={user.photoURL} />
                    <p>hey {user.displayName}!</p>
                     <Button variant="contained" onClick={signOutUser}>Log Out</Button>
                </div>
                <nav className='links'>
                    <ul>
                        <li>
                            <NavLink exact to='/dashboard'>
                                <img src={DashboardIcon} alt='dashboard icon' />
                                <span>dashboard</span>
                            </NavLink>
                        </li>
                        <li>
                                <NavLink to='/findMatch'>
                                <img src={AddIcon} alt='add icon' />
                                <span>Find a Match</span>
                            </NavLink>
                            {user.photoURL && <OnlineUsers />}
                        </li>

                    </ul>

                </nav>
            </div>

        </div>
    )
}
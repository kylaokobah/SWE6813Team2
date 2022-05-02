import { NavLink, Link, useNavigate } from 'react-router-dom'
//components
import Avatar from '../Avatar/Avatar'
//styling
import '../../styles/Sidebar.css'
//icons for nav links
import DashboardIcon from '../../assets/images/dashboard_icon.svg'
import AddIcon from '../../assets/images/add_icon.svg'
import RotateLeftIcon from '@mui/icons-material/RotateLeft';
import Button from '@mui/material/Button';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
//hooks
import { useAuthContext } from '../../hooks/useAuthContext'
//firebase auth
import { authDb } from '../../database/firebase'
import { signOut } from '@firebase/auth';



export default function Sidebar() {
const navigate= useNavigate();
const signOutUser = async() => {
      try {
          await signOut(authDb);
          navigate('/landing');
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
                    <p>hey {user.epicName}!</p>

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
                                <SearchIcon/>
                                <span>Find a Match</span>
                            </NavLink>
                    </li>
                      <li>
                             <NavLink to='/match-history'>
                                  <RotateLeftIcon/>
                                   <span>Previous Matches</span>
                              </NavLink>
                       </li>
                        <li>
                                <NavLink to='/profile'>
                                     <PersonIcon/>
                                      <span>Profile Page</span>
                                        </NavLink>

                        </li>

                    </ul>

                </nav>
            </div>

        </div>
    )
}
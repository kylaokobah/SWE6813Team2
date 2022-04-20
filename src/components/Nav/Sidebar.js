import { NavLink, Link } from 'react-router-dom'
import Avatar from '../Avatar/Avatar'
import '../../styles/Sidebar.css'
import DashboardIcon from '../../assets/images/dashboard_icon.svg'
import AddIcon from '../../assets/images/add_icon.svg'
//material UI
import SearchIcon from '@mui/icons-material/Search';
//hooks
import { useAuthContext } from '../../hooks/useAuthContext'



export default function Sidebar() {


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
                                <img src={AddIcon} alt='add icon' />
                                <span>Find a Match</span>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>

        </div>
    )
}
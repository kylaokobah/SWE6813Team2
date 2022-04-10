import { NavLink } from 'react-router-dom'
import Avatar from './Avatar'
import { useAuthContext } from '../hooks/useAuthContext'
import '../styles/Sidebar.css'
import DashboardIcon from '../../assets/images/dashboard_icon.svg'
import AddIcon from '../../assets/images/add_icon.svg'

export default function Sidebar() {

    const { user } = useAuthContext()

    return (
        <div className='sidebar'>
            <div className='sidebar-content'>
                <div className='user'>
                    <Avatar src={user.photoURL} />
                    <p>hey {user.displayName}!</p>
                </div>
                <nav className='links'>
                    <ul>
                        <li>
                            <NavLink exact to='/'>
                                <img src={DashboardIcon} alt='dashboard icon' />
                                <span>dashboard</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/create'>
                                <img src={AddIcon} alt='add icon' />
                                <span>new project</span>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>

        </div>
    )
}
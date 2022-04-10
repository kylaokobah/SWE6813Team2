import { Link } from 'react-router-dom'
import { useLogout } from '../../hooks/useLogout'
import { useAuthContext } from '../../hooks/useAuthContext'
import '../../styles/navbar.css'


export default function NavBar() {

    const { logout, isPending } = useLogout()
    const { user } = useAuthContext()

    return (
        <div className='navbar'>
            <ul>
            <li>
             <Link to='/landing'>Home</Link>
             </li>
                <li className='logo'>

                    <span>Gamers Meet Logo</span>
                </li>

                {user ?
                    <li>
                            {!isPending && <button className='btn' onClick={logout}>logout</button>}
                            {isPending && <button className='btn' disabled>logging out</button>}
                    </li>
                :
                    <>
                        <li>
                            <Link to='/login'>login</Link>
                        </li>
                        <li>
                            <Link to='/register'>signup</Link>
                        </li>
                    </>
                }
            </ul>
        </div>

    )

}
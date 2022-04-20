import React
  //useEffect,
 // useState
 from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { useLogout } from '../../hooks/useLogout'
import { useAuthContext } from '../../hooks/useAuthContext'
import { getAuth, signOut} from "firebase/auth";
import '../../styles/navbar.css'
import { authDb} from '../../database/firebase'


export default function NavbarHome() {

    const { logout, isPending } = useLogout()
    const { user } = useAuthContext()

    return (
        <div className='navbar'>
            <ul>
                <li className='logo'>

                    <span>Gamers Meet</span>
                </li>
                        <li>
                            <Link to='/login'>Login</Link>
                        </li>
                        <li>
                            <Link to='/register'>Register</Link>
                        </li>


            </ul>
        </div>

    )

}


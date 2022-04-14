import { Link } from 'react-router-dom'
import { useLogout } from '../../hooks/useLogout'
import { useAuthContext } from '../../hooks/useAuthContext'
import '../../styles/navbar.css'



export default function NavBar() {

const { logout, isPending } = useLogout()
    const { user } = useAuthContext()

    /*const navigate=  useNavigate()
        const location= useLocation()
        const pathMatchRoute=(route)=>{
                if(route==location.pathname){
                    return true
                }
        }*/

    return (
       /* <div className='navbar'>
            <nav className="navbarNav">
                        <ul className="navbarListItems">
                          <li className="navbarListItem" onClick={()=>navigate('/')}>
                           <HomeIcon fill={pathMatchRoute('/') ? '#2c2c2c' : '#8f8f8f' } width='36px' height='36px'/>
                                           <p className={pathMatchRoute('/landing') ? 'navbaeListItemNameActive' : 'navbaeListItemName'}>Explore</p>
                                        </li>*/
 <div className='navbar'>
            <ul>
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
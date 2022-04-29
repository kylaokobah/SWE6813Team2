/*import React, { useState } from 'react'
import styles from "./header.module.scss";
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from '@firebase/auth';
import { authDb } from '../../database/firebase';
import { Link, NavLink } from 'react-router-dom';
import AboutUsModal from '../AboutUsModal/AboutUsPlatform';
import PersonIcon from '@mui/icons-material/Person';

/*this header will only be available when the user is logged in*/
/*function Header() {
  const [user,loading] = useAuthState(authDb);
  const [aboutModal, setAboutModal] = useState(false);
  const [profile, setProfile] = useState(false);

/*auth to make sure that this doesn't display instead of the unauthorized navbar*/
 /* const navigate= useNavigate();
  const signOutUser = async() => {
        try {
            await signOut(authDb);
            navigate('/landing'); //navigates to landing if unauthorized user
        } catch (err) {
            console.log(err)
        }
    }

      const { user } = useAuthContext()

/*Even though these routes don't exist on the side bar they will still function the same way*/
 /* return (
    <>
    <header  className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.leftContent}>
          <h4 className={styles.headerTitle}>Gamers Meet</h4>
          <nav className={styles.nav}>
            <NavLink to='/maybe'  className={({isActive}) => isActive && styles.selected}> <p>Store</p> </NavLink>
            <NavLink to='/maybe'  className={({isActive}) => isActive && styles.selected}> <p>Events</p> </NavLink>


            <button onClick={() => setAboutModal(true)} className={styles.aboutPlatformBtn}>
             About Gamers Meet
            </button>
            <button className={styles.reportBtn}>
              Report User
            </button>
          </nav>
        </div>
          <button onClick={() => setAboutModal(true)} className={styles.aboutPlatformBtn}>
                     About Gamers Meet
                    </button>

             <Link to='/profile'>

                </div>
              </Link>

        </div>
      </div>
    </header>
    {aboutModal ? <AboutPlatform onHide={() => setAboutModal(false)} /> : null}
    </>
  )
}

export default Header*/

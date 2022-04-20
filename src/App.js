import React, { useState, useEffect } from 'react';
//theme
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
//routing
import {Route, Routes, Router, BrowserRouter, useNavigate, Navigate} from 'react-router-dom'
import ProtectedRoute from './components/Nav/protectedRoute';
// Pages
import LoginPage from './pages/LoginPage.js';
import LandingPage from './pages/LandingPage.js';
import RegisterPage from './pages/RegisterPage.js';
import DashboardPage from './pages/DashboardPage.js';
import findMatchPage from './pages/findMatchPage.js';
import MatchHistoryPage from './pages/MatchHistoryPage.js';
import ProfilePage from './pages/ProfilePage.js';
import OnlineUsers from './components/OnlineUsers/OnlineUsers'
import OnboardingModal from './pages/Onboarding /OnboardingModal'
import Main from './components/Nav/Main.js'
// Components
import NavBar from "./components/Nav/NavBar.js";
import NavBarHome from "./components/Nav/NavBarHome.js";
import NavBarRegister from "./components/Nav/NavBarRegister.js";
import Sidebar from "./components/Nav/Sidebar.js";
// Redux
/*import { checkUserSession } from './Redux/user/user.actions';
import {selectUser} from './Redux/user/user.selectors';*/
import { useAppDispatch, useAppSelector} from './hooks/index.js';
//styling
import './styles/app.css';
//testing for errors
import ErrorBoudry from './testErrors/error-boundry'
//firebase auth
import {authDb} from './database/firebase'
import { getAuth, signOut } from "firebase/auth";
//hooks
import { useAuthContext } from './hooks/useAuthContext'
import { AuthContextProvider } from './context/AuthContext'



function App() {

  return (
          <BrowserRouter>
              <Routes>
                    <Route path="/" element={
                    <>
                    <NavBarHome />
                    <LandingPage />
                    </>
                    } />
                    <Route path='/login' element={
                    <>
                    <NavBar/>
                    <LoginPage />
                     </>
                     } />
                    <Route path='/register'element={
                    <>
                    <NavBarRegister/>
                    <RegisterPage/>
                    </>
                    }/>
                    <Route path="/onboarding/:userId/*" element={<OnboardingModal />} />
                    <Route path='/*' element={<Main />} />
              </Routes>
                </BrowserRouter>
                    );
                   }

export default App;






/*function App() {

const { user, authIsReady } = useAuthContext()

  const theme = createTheme({
    palette: {
      mode: 'light',
    },
    typography: {
      guideline: {
        color: 'gray',
        display: 'block',
      },
    },
  });

return (
 <ErrorBoudry>
   <div className="App">
    {authIsReady && (
    <BrowserRouter>
        {user && <Sidebar />}
        <div className='container'>
        <NavBar/>
             <Routes>
                <Route path="/*" element={<Main />} />
               <Route path="/" element={!user && <LandingPage />} />
               <Route path="/login" element={!user && <LoginPage />} />
               <Route path="/register" element={user && <RegisterPage />} />
               <Route path="/onboarding/:userId/*" element={<OnboardingModal />} />


                <Route path="/dashboard" element={
                 <ProtectedRoute>
                  user && <DashboardPage/>
                 </ProtectedRoute>
                 }/>
                <Route path="/findMatch" element={
                 <ProtectedRoute>
                <findMatchPage />
                </ProtectedRoute>
                }/>
                <Route path="/profile" element={
                 <ProtectedRoute>
                <ProfilePage />
                </ProtectedRoute>
                }/>
                <Route path="/match-history" element={
                  <ProtectedRoute>
                <MatchHistoryPage />
               </ProtectedRoute>
                }/>

              </Routes>
               </div>
                {user && <OnlineUsers />}
              </BrowserRouter>
              )}
              </div>
             </ErrorBoudry>
            );
         }
export default App*/


 /*<ErrorBoudry>
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          {user && <Sidebar />}
          <div className='container'>
            <NavBar />
            <Routes>
              <Route
                path='/'
                element={user && <Navigate to='/landing' />}
              />
              <Route
                path='/dashboard'
                element={user ? <DashboardPage /> : <Navigate to='/login' />}
              />
              <Route
                path='/findMatch'
                element={user ? <findMatchPage/> : <Navigate to='/login' />}
              />
              <Route
                path='/match-history'
                element={user ? <MatchHistoryPage/> :  <Navigate to='/login' />}
                 />
               <Route
                  path='/profile'
                  element={user ? <ProfilePage/> :  <Navigate to='/login' />}
                   />
              <Route
                path='/login'
                element={user ? <Navigate to='/login' /> : <LoginPage/>}
              />
              <Route
                path='/register'
                element={user ? <Navigate to='/register' /> : <RegisterPage/>}
              />

            </Routes>
          </div>
          {user && <OnlineUsers />}
        </BrowserRouter>
      )}
    </div>
 </ErrorBoudry>
  );
}*/


/*export const ProtectedRoutes = ({children}) =>{
  const {currentUser} = useAuthContext();
  if(currentUser) {
    return children;
  } else {
    return <Navigate to='/landing' />
  }
}*/
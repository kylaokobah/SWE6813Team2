import React, { useState, useEffect } from 'react';
import {useNavigate, Router, Routes, Route} from 'react-router-dom';
//import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import LoginPage from './pages/LoginPage.js';
import LandingPage from './pages/LandingPage.js';
import DashboardPage from './pages/DashboardPage.js';
import RegisterPage from './pages/RegisterPage.js';
import findMatchPage from './pages/findMatchPage.js';
import MatchHistoryPage from './pages/MatchHistoryPage.js';
import ProfilePage from './pages/ProfilePage.js';
import { useAppDispatch, useAppSelector } from './hooks/index.js';
import { setUser } from './Redux/modules/reduxUser';
import { getAllUsers } from './database/collection/users';
import NavBar from "./components/Nav/NavBar.js";
import Sidebar from "./components/Nav/Sidebar.js";
import {AuthChange} from './database/collection/Auth';
import { useAuthContext } from './hooks/useAuthContext';



function App() {
  const dispatch = useAppDispatch();
  const { user, authIsReady} = useAuthContext;
  const theme = createTheme({
    palette: {
      mode: 'light',
    },

    },
  );

  const navigate = useNavigate();
  useEffect(() => {
  if (authIsReady) {
  navigate("/dashboard");
  }else {
  navigate("/landing")
  }
  }, [authIsReady, navigate]);


return (
 <ThemeProvider theme={theme}>
  <CssBaseline />
{authIsReady && (

      <div className= 'App'>
   {user && <Sidebar/>}
      <div className='container'>
       <NavBar/>
       <Router>
          <Routes>
               <Route path="/" element={<LandingPage />} />
               <Route path="/landing" element={<LandingPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/dashboard" element={<DashboardPage/> }/>
                <Route path="/findMatch" element={<findMatchPage />}/>
                <Route path="/profile" element={<ProfilePage />}/>
                <Route path="/match-history" element={<MatchHistoryPage /> }/>
            </Routes>
           </Router>
           </div>
               </div>
            )
             }
            </ThemeProvider>
           );

         }
       export default App;
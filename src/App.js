import React, { useState, useEffect } from 'react';
//theme
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
//routing
import {Route, Routes, Router, BrowserRouter, useNavigate, Navigate, useParams } from 'react-router-dom'
import ProtectedRoute from './components/Nav/protectedRoute';
// Pages
import LoginPage from './pages/LoginPage.js';
import LandingPage from './pages/LandingPage.js';
import RegisterPage from './pages/RegisterPage.js';
import DashboardPage from './pages/DashboardPage.js';
import MatchHistoryPage from './pages/MatchHistoryPage';
import ProfilePage from './pages/ProfilePage/ProfilePage.js';
import OnlineUsers from './components/OnlineUsers/OnlineUsers'
import OnboardingModal from './pages/Onboarding /OnboardingModal'
import Main from './components/Nav/Main.js'
// Components
import NavBar from "./components/Nav/NavBar.js";
import NavBarHome from "./components/Nav/NavBarHome.js";
import NavBarRegister from "./components/Nav/NavBarRegister.js";
import Sidebar from "./components/Nav/Sidebar.js";
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







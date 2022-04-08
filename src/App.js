import React, { Component } from 'react';
import { Navigate, Routes, Route, Link, BrowserRouter  } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import LoginPage from './pages/LoginPage.js';
import LandingPage from './pages/LandingPage.js';
import DashboardPage from './pages/DashboardPage.js';
import RegisterPage from './pages/RegisterPage.js';
import findMatchPage from './pages/findMatchPage.js';
import MatchHistoryPage from './pages/MatchHistoryPage.js';
import ProfilePage from './pages/ProfilePage.js';
import AuthProvider from "./context/AuthProvider";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import NavBar from "./components/Nav/NavBar.js";


function App() {
return (
<div className="App">
<NavBar/>
    <AuthProvider>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route
                  path="/dashboard"
                  element={
                    <PrivateRoute>
                      <DashboardPage/>
                    </PrivateRoute>
                  }
                />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                 <Route
                  path="/findMatch"
                  element={
                  <PrivateRoute>
                  <findMatchPage />
                   </PrivateRoute>
                    }
                    />
                <Route
                   path="/profile"
                   element={
                   <PrivateRoute>
                   <ProfilePage />
                   </PrivateRoute>
                   }
                   />
                <Route
                  path="/match-history"
                  element={
                    <PrivateRoute>
                      <MatchHistoryPage />
                    </PrivateRoute>
                  }
                />
              </Routes>
            </BrowserRouter>
          </AuthProvider>
        </div>
      );
    }

  export default App;
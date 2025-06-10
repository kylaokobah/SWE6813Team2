import React from 'react'
import Sidebar from './Sidebar'
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import { useAuthContext } from '../../hooks/useAuthContext'
import DashboardPage from '../../pages/DashboardPage.js';
import FindMatchPage from '../../pages/findMatchPage.js';
import MatchHistoryPage from '../../pages/MatchHistoryPage.jsx';
import ProfilePage from '../../pages/ProfilePage/ProfilePage.jsx';
import ProtectedRoute from './protectedRoute';
import "./App.css"


function Main() {
const { user, authIsReady } = useAuthContext()
  return (
    <div className="App">
     {authIsReady && (
    <ProtectedRoute>
      <Routes>
        <Route path='/profile' element={
        <>
         {user && <Sidebar />}
        <ProfilePage />
        </>
        } />
        <Route path='/findMatch' element={
        <>
         {user && <Sidebar />}
        <FindMatchPage />
        </>
        } />
        <Route path='/match-history' element={
        <>
         {user && <Sidebar />}
        <MatchHistoryPage />
        </>
        } />

        <Route path='/dashboard' element={
        <>

         <DashboardPage />

        </>
        } />
      </Routes>
    </ProtectedRoute>
    )}
 </div>
  );
}

export default Main

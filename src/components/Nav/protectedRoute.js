/*import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthContext  } from '../../hooks/useAuthContext';


const ProtectedRoute = ({ isLoggedIn, children }) => {
 if (!isLoggedIn) {
 return <Navigate to="/" replace />;
 }
 return children;
};
export default ProtectedRoute;*/

import { useAuthState } from 'react-firebase-hooks/auth'
import { useLocation, Navigate } from 'react-router-dom';
import { useAuthContext  } from '../../hooks/useAuthContext';
import { authDb } from '../../database/firebase';

function ProtectedRoute(props) {
  const [user,loading] = useAuthState(authDb);
  let location = useLocation();


  if(!user && !loading) {
    return <Navigate to="/" state={{ from: location }} replace />
  }
  return props.children;
}

export default ProtectedRoute
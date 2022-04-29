import { useAuthState } from 'react-firebase-hooks/auth'
import { useLocation, Navigate } from 'react-router-dom';
import { useAuthContext  } from '../../hooks/useAuthContext';
import { authDb } from '../../database/firebase';

/*If unauthorized user types in one of these paths will be redirected to unauthorized page*/
function ProtectedRoute(props) {
  const [user,loading] = useAuthState(authDb);
  let location = useLocation();


  if(!user && !loading) {
    return <Navigate to="/" state={{ from: location }} replace />
  }
  return props.children;
}

export default ProtectedRoute
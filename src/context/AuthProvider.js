import React, { createContext } from 'react';
import useUserAuthActions from '../Redux/actions/Auth.js'

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const allContext = useUserAuthActions()
    return (
        <AuthContext.Provider value={allContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
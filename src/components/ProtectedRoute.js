import React from 'react'
import { Navigate} from 'react-router-dom';
import { UserAuth } from '../context/AuthContext'

function ProtectedRoute({children}) {
    const { user } = UserAuth();
console.log('User in ProtectedRoute:', user);

    if(!user) {
        return <Navigate to="/" />;
    } else {
        return children;
    }
}

export default ProtectedRoute
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import Loading from './Loading'

function PrivateRoute({ children, redirectPath}) {
    const { currentUser, loading } = useAuth();

    if (loading) {
        return <Loading/>;
    } else if (currentUser.uid) {
        return children;
    } else {
        return <Navigate to={redirectPath} replace/>
    }
}

export default PrivateRoute
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import Loading from './Loading'

function PublicRoute({ children, redirectPath }) {
    const { currentUser, loading } = useAuth();

    if (loading) {
        return <Loading/>;
    } else if (currentUser.uid) {
        return <Navigate to={redirectPath} replace/>
    } else {
        return children;
    }
}

export default PublicRoute;
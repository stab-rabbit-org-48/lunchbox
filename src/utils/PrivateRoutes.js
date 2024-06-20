import React from 'react';
import { Outlet, Navigate } from 'react-router-dom'
import { useAuth } from '../hooks/AuthProvider';


const PrivateRoutes = () => {
    // check authentication
    const { username } = useAuth();
    console.log('private route checking username:', username);
    // TODO - implement session
    return (
        username ? <Outlet/> : <Navigate to="/login"/>
    )
}

export default PrivateRoutes;
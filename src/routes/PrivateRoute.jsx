import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const { user, loader } = useContext(AuthContext)
    const location = useLocation()

    if(loader){
        return <div>Loading...</div>
    }

    if(user){
        return children
    }

    return <Navigate to="/login" state={{from: location}} replace />;
};

export default PrivateRoute;
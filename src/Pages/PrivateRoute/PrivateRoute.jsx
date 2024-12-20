import React, { useContext } from 'react';
import AuthContext from '../../Context/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    const {user, loading }= useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <progress className="progress w-56"></progress>
    }


    if(user){
        return children
    }

    return <Navigate to='/sign-in' state={location?.pathname || '/'}></Navigate>
};

export default PrivateRoute;
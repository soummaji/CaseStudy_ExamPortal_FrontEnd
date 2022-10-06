import React from 'react';
import { Outlet,Navigate,useLocation } from 'react-router-dom';

function ProtectedRoute(props) {
    const isAuth = localStorage.getItem("isAuthenticated");
    console.log(isAuth);
    const location=useLocation();
    
    if(isAuth){
        return<Outlet />
    }else{
        return <Navigate to='/' state={{ from: location}} replace/>
    }
}
export default ProtectedRoute;
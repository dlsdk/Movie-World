import React from 'react'
import { Navigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export default function PrivateRoute({children}) {
    const location = useLocation();
    
    if (!localStorage.getItem('currentUser')) //login olmuş bir kullanıcı var mı?
    {
        alert("PLEASE LOGIN FIRST")
       return <Navigate to='/auth/login' state={location.pathname}/>
    }
    return children;
}

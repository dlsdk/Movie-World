import React from 'react'
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({children}) {
    
    if (!localStorage.getItem('currentUser')) //login olmuş bir kullanıcı var mı?
    {
        alert("PLEASE LOGIN FIRST")
       return <Navigate to='/auth/login'/>
    }
    return children;
}

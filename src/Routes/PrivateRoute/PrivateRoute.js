import React from 'react'
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({children}) {
     // login olmuş herhangi bir kullanıcı var mı?
    if (!localStorage.getItem('currentUser')) {
       return <Navigate to='/auth/login' replace={true} />
    }
    return children;
}

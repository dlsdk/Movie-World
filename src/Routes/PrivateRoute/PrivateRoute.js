import React from 'react'
import { Navigate } from 'react-router-dom';
import { Modal } from 'antd/';

export default function PrivateRoute({children}) {
    
    if (!localStorage.getItem('currentUser')) // login olmuş herhangi bir kullanıcı var mı?
    {
        Modal.error({
            title: 'This is an error message',
            content:  `Please Login First!`,
        });
       return <Navigate to='/auth/login' replace={true} />
    }
    return children;
}

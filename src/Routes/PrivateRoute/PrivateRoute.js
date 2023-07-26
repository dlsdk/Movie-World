import React from 'react'
import selectors from '../../redux/selectors'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';

const {SiteSelectors: {selectUsers,selectNumberOfUsers}} = selectors
export default function PrivateRoute({children}) {
    
    if (localStorage.length === 0) //herhangi bir kulanııcı var mı
    {
        alert("PLEASE LOGIN FIRST")
       return <Navigate to='/auth/login'/>
    }
    return children;
}

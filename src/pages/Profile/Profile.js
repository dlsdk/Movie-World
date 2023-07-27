import React from 'react'
import Actions from '../../redux/actions'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import helperFunctions from '../../helpers'

const {SiteActions: {deleteCurrentUser}} = Actions
const {getFromLocalStorage} = helperFunctions


export default function Profile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const localCurrentUserUname = getFromLocalStorage('currentUser').uname
  const handleLogout = () =>{
    localStorage.removeItem('currentUser'); 
    dispatch(deleteCurrentUser())
    navigate('/')
  }

  const handleDeleteAccount = () => {
   Object.values(localStorage).forEach((item) => { 
    item = Object.parse(item);
    if (item.uname === localCurrentUserUname){
      localStorage.removeItem(`user_${item.uname}`);
    }
  })
    handleLogout();
  }
 
  return (
    <>  
      <div>Profile</div>
      <button onClick={handleLogout}>LogOut</button>
      <button onClick={handleDeleteAccount}>Delete Account</button>
    </>

  )
}

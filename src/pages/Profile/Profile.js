import React from 'react'
import selectors from '../../redux/selectors'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import Actions from '../../redux/actions'
import { useDispatch } from 'react-redux'
import { json, useNavigate } from 'react-router-dom'
import helperFunctions from '../../helpers'

const {SiteActions: {deleteCurrentUser}} = Actions
const {SiteSelectors: {selectCurrentUser}} = selectors
const {getFromLocalStorage,getAllLocalStorageValues} = helperFunctions



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
   getAllLocalStorageValues().forEach((item) => {
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

import React from 'react'
import Actions from '../../redux/actions'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import helperFunctions from '../../helpers'
import selectors from '../../redux/selectors'
import { useSelector } from 'react-redux'

const {SiteActions: {deleteCurrentUser,deleteUser}} = Actions
const {getFromLocalStorage} = helperFunctions
const {SiteSelectors: {selectUsers}} = selectors


export default function Profile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const users = useSelector(selectUsers);
  
  const handleLogout = () =>{
    localStorage.removeItem('currentUser'); 
    dispatch(deleteCurrentUser())
    navigate('/')
  }
  const handleDeleteAccount = () => {
  const localCurrentUserUname = getFromLocalStorage('currentUser').uname
    Object.values(localStorage).forEach((item) => { 
    item = JSON.parse(item);
    if (item.uname === localCurrentUserUname){
      localStorage.removeItem(`user_${item.uname}`);
    
    }
  }
  ) 
   dispatch(deleteUser({id:`user_${localCurrentUserUname}`}))
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

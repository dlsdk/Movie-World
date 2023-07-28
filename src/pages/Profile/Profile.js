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
const localCurrentUserUname = getFromLocalStorage('currentUser').uname

export default function Profile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const users = useSelector(selectUsers);
  console.log("USERS",users);
  
  const handleLogout = () =>{
    localStorage.removeItem('currentUser'); 
    dispatch(deleteCurrentUser())
    navigate('/')
  }
  const handleDeleteAccount = () => {

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

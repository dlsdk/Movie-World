import React from 'react'
import style from './LogoutDelete.module.css'
import { Button } from 'antd'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Actions from '../../redux/actions'
import helperFunctions from '../../helpers';

const {SiteActions: {deleteCurrentUser,deleteUser}} = Actions
const {getFromLocalStorage} = helperFunctions

export default function LogoutDeleteButtons() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  
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
    <div className={style.buttondiv}>
      <Button type='primary' className={style.logout} onClick={handleLogout}>LogOut</Button>
      <Button type='primary' className={style.delete} onClick={handleDeleteAccount}>Delete Account</Button>
    </div>
  )
}

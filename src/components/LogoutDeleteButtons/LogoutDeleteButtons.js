import React from 'react'
import style from './LogoutDelete.module.css'
import { Button , Popconfirm} from 'antd'
import { useNavigate } from 'react-router-dom';
import helperFunctions from '../../helpers';
const {getFromLocalStorage} = helperFunctions

export default function LogoutDeleteButtons() {
  const navigate = useNavigate();

  const handleLogout = () =>{
    localStorage.removeItem('currentUser'); 
    navigate('/')
  }
  
  const handleDeleteAccount = () => {
    const localCurrentUserUname = getFromLocalStorage('currentUser').uname;
    localStorage.removeItem(`user_${localCurrentUserUname}`);
    handleLogout();
  }

  return (
    <div className={style.buttondiv}>
      <Button type='primary' className={style.logout} onClick={handleLogout}>LogOut</Button>
      <Popconfirm
        title="Delete the account"
        description="Are you sure to delete this account?"
        onConfirm={handleDeleteAccount}
        okText="Yes"
        cancelText="No"
      >
        <Button type='primary' className={style.delete}>Delete Account</Button>
      </Popconfirm>
  
    </div>
  )
}

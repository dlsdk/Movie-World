import React from 'react'
import { Form, Input, Button, Modal } from 'antd';
import { UserOutlined, LockOutlined, ExclamationCircleFilled } from '@ant-design/icons';
import styles from './UpdateModal.module.css';
import { useState } from 'react';
import helperFunctions from '../../helpers';

const { getFromLocalStorage } = helperFunctions;



export default function UpdateModal({visible,uname,password,setVisible}) {

    const [inputValue, setInputValue] = useState('');
     
    const changeUname = (uname) => {
         
        const currentUser = getFromLocalStorage('currentUser');
        console.log("eeey uname fonks");
            localStorage.setItem(
                `user_${uname}`,
                JSON.stringify({
                    ...currentUser,
                    uname,
                })
            );
            localStorage.setItem(
                'currentUser',
                JSON.stringify({
                ...currentUser,
                    uname,
                })
            );
           
            localStorage.removeItem(`user_${currentUser.uname}`); 
        }
    
        const changePassword = (password) => {
            console.log('AYNIIII');
    
            const currentUser = getFromLocalStorage('currentUser');
            console.log("passwordda currentUserUname ne diye geliyor ? :",currentUser.uname)
            localStorage.setItem(
                `user_${currentUser.uname}`,
                JSON.stringify({
                ...currentUser,
                password}));
            localStorage.setItem(
                'currentUser',
                JSON.stringify({
                ...currentUser,
                password}));
           
        }
    
        const handleOk = (uname,password) => {
            const currentUser = getFromLocalStorage('currentUser');
            console.log("CURRENT user : ",currentUser,"inputValue = ",inputValue);
                if (inputValue === currentUser.password) { 
                    console.log("ŞİFRE VE GİRİLEN İNPUT AYNI");
                    console.log("Password ne ? :",password);
                    if (password){ 
                        console.log("buraya girdi mi password");
                        changePassword(password)
                    }
                    if (uname){
                        console.log("buraya girdi mi uname");
                       changeUname(uname)
                    }
                   
                }
                else{
                    Modal.error({
                        title: 'This is an error message',
                        content:  `Password Wrong!`,
                    });
                } 
            setInputValue('');
            setVisible(false);
        }

        const handleCancel = () => {
            setInputValue('');
            setVisible(false);
        };
    

  return (
    <Modal
        title="Confirm Password"
        visible={visible}
        onOk={() => handleOk(uname,password)}
        onCancel={handleCancel}>
        <label htmlFor='confirmValue'>Please confirm your password!</label>
        <Input id='confirmValue' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
    </Modal>
  )
}

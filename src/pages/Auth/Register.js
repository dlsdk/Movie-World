import React from 'react'
import { useNavigate } from 'react-router-dom'
import helperFunctions from 'helpers'
import {  Form, Modal } from 'antd';
import LoginRegisterForm from 'components/Form/Forms';
import { registerFields } from 'helpers/Fields';

const { localStorageHelperFunctions: {getAllLocalStorageValues,getFromLocalStorage}} = helperFunctions

const handleNewId = () => {
    return localStorage.length === 0 ? 1 : Math.max(...getAllLocalStorageValues().map(data => data.id)) + 1;
}

const createNewUser = (uname,password,navigate) => {
    const id = handleNewId();
    const userPayload = { id,
        uname,
        password,
        avatar_path:null
    }
    localStorage.setItem(`user_${uname}`,JSON.stringify(userPayload));
    Modal.success({
        content:  'Registration completed successfully',
        onOk: () => navigate('/auth/login'),
    });
}

export default function Register() {
    
    const navigate = useNavigate(); 
    const [form] = Form.useForm();
    // önce girilen passwordların aynı olduğunu doğrula aynıysa zaten kayıtlı bir user var mı bak yoksa yeni userı oluştur.
    const handleSubmit = (values) => {
        const { uname, password, confirmpass } = values;

        if (password === confirmpass){    
            if (getFromLocalStorage(`user_${uname}`)){
                Modal.info({
                    content:  'Already have account!',
                });
            }
            else{
              createNewUser(uname,password,navigate);
            }
        } 
        else{
            Modal.error({
                title: 'This is an error message',
                content:  `Passwords doesn't match!`,
            });
        }
        form.resetFields();
    }

  return (
        <LoginRegisterForm fields={registerFields} navigatePath={'/auth/login'} 
        handleSubmit={handleSubmit}  buttonTextFirst={"Go back to Login"} 
        buttonTextSecond={'Create Account'}/>
  )
}
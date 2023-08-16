import React from 'react'
import { useNavigate } from 'react-router-dom'
import helperFunctions from '../../helpers'
import { Button, Form, Input, Modal } from 'antd';
import { UserOutlined,LockOutlined } from '@ant-design/icons'
import styles from './Auth.module.css'

const { getFromLocalStorage, getAllLocalStorageValues } = helperFunctions

const handleNewId = () => {
    return localStorage.length === 0 ? 1 : Math.max(...getAllLocalStorageValues().map(data => data.id)) + 1;
}

const createNewUser = (uname,password) => {
    const id = handleNewId();
    const userPayload = { id,
        uname,
        password,
        avatar_path:null
    }
    localStorage.setItem(`user_${uname}`,JSON.stringify(userPayload));
    Modal.success({
        content:  'Registration completed successfully',
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
              createNewUser(uname,password);
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
    <div className={styles.formdiv}>
    <Form className={styles.FormStyle} form={form} onFinish={handleSubmit}>
            <Form.Item name="uname" rules={[{ required: true, message: 'Please input your Username!' }]}>
                <Input prefix={<UserOutlined />} placeholder="Username" />
            </Form.Item>
            <Form.Item name="password" rules={[{ required: true, message: 'Please input your Password!' }]}>
                <Input  prefix={<LockOutlined />} type="password" placeholder="Password"/>
            </Form.Item>
            <Form.Item name="confirmpass" rules={[{ required: true, message: 'Please confirm your Password!' }]}>
                <Input  prefix={<LockOutlined />} type="password" placeholder="Confirm Password"/>
            </Form.Item>
            <Form.Item className={styles.buttoncontainer}>
                <Button className={styles.buttonlink} type='link' onClick={() => navigate('/auth/login')}>Go back to Login</Button>
            </Form.Item>
            <Button className={styles.button} type='primary' htmlType="submit" >Create Account</Button>
    </Form>
    </div>
  )
}

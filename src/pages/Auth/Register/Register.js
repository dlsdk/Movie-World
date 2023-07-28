import React from 'react'
import Actions from '../../../redux/actions'
import { useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import helperFunctions from '../../../helpers'
import { Button, Form, Input } from 'antd';
import { UserOutlined,LockOutlined } from '@ant-design/icons'
import styles from '../Login/Login.module.css'

const {SiteActions: {addUser,deleteCurrentUser}} = Actions 
const {getAllLocalStorageValues} = helperFunctions


export default function Register() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    dispatch(deleteCurrentUser());
  
    const handleSubmit = (values) => {
    const {uname, password, confirmpass} = values

    const id = localStorage.length === 0 ? 1 : Math.max(...getAllLocalStorageValues().map(data => data.id)) + 1;

    if (password === confirmpass){
        const user = JSON.parse(localStorage.getItem(`user_${uname}`))
        if (user){
            alert("Already have account");
        }
        else{
            let userPayload = { id,
                uname,
                password
            }
            dispatch(addUser(userPayload));
            localStorage.setItem(`user_${uname}`,JSON.stringify(userPayload))
            alert("Registration completed successfully");
        }
    } 
    else{
        alert("Passwords doesn't match!")
    }
}
  return (
    <div className={styles.formdiv}>
          <Form className={styles.FormStyle}  style={{width:'20rem',}} onFinish={handleSubmit}>
            <Form.Item name="uname" rules={[{ required: true, message: 'Please input your Username!' }]}>
                <Input prefix={<UserOutlined />} placeholder="Username" />
            </Form.Item>
            <Form.Item name="password" rules={[{ required: true, message: 'Please input your Password!' }]}>
                <Input  prefix={<LockOutlined />} type="password" placeholder="Password"/>
            </Form.Item>
            <Form.Item name="confirmpass" rules={[{ required: true, message: 'Please confirm your Password!' }]}>
                <Input  prefix={<LockOutlined />} type="password" placeholder="Confirm Password"/>
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button" >Create Account</Button>
        <Button  type='link' onClick={() => navigate('/auth/login')}>Go back to Login</Button>
      </Form.Item>
    </Form>
    </div>
  )
}

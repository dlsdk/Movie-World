import React from 'react'
import Actions from '../../redux/actions'
import { useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import helperFunctions from '../../helpers'
import { Button, Form, Input } from 'antd';
import { UserOutlined,LockOutlined } from '@ant-design/icons'
import styles from './Auth.module.css'

const {SiteActions: {addUser,deleteCurrentUser}} = Actions 
const {getAllLocalStorageValues} = helperFunctions


export default function Register() {
    const dispatch = useDispatch();
    const navigate = useNavigate(); 
    const [form] = Form.useForm();
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
                password}
                dispatch(addUser(userPayload));
                localStorage.setItem(`user_${uname}`,JSON.stringify(userPayload))
                alert("Registration completed successfully");
            }
        } 
        else{
            alert("Passwords doesn't match!")
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
            <Form.Item>
            <Button className={styles.button} type='primary' htmlType="submit" >Create Account</Button>
                <Button className={styles.buttonlink} type='link' onClick={() => navigate('/auth/login')}>Go back to Login</Button>
      </Form.Item>
    </Form>
    </div>
  )
}

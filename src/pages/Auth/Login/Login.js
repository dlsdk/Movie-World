import React from 'react'
import { useNavigate } from 'react-router-dom'
import Actions from '../../../redux/actions'
import { useDispatch} from 'react-redux'
import helperFunctions from '../../../helpers'
import { useLocation } from 'react-router-dom'
import { Button, Form, Input } from 'antd';
import { UserOutlined,LockOutlined } from '@ant-design/icons'
import styles from './Login.module.css'

const {SiteActions: {setCurrentUser,deleteCurrentUser}} = Actions
const {getFromLocalStorage} = helperFunctions


export default function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    dispatch(deleteCurrentUser());
    const location = useLocation()
    const [form] = Form.useForm();
                localStorage.removeItem('currentUser')
    
    const handleSubmit = (values) => {
        const {uname, password} = values;
        const user = getFromLocalStorage(`user_${uname}`)
        console.log(values)
        if (user){
            if (password === user.password){
                dispatch(setCurrentUser(user));  
                localStorage.setItem('currentUser',JSON.stringify(user));
                navigate(location.state || '/');
            }
            else{
                alert("Password Wrong")
            }
           
        }
        else{
            alert("Please Register First")
        }
    }

  return (
    //FORMİK İLE VALİDATE YAP
    <>
    <div className={styles.formdiv}>
          <Form className={styles.FormStyle} form={form} style={{width:'20rem',}} onFinish={handleSubmit}>
            <Form.Item name="uname" rules={[{ required: true, message: 'Please input your Username!' }]}>
                <Input prefix={<UserOutlined />} placeholder="Username" />
            </Form.Item>
            <Form.Item name="password" rules={[{ required: true, message: 'Please input your Password!' }]}>
                <Input  prefix={<LockOutlined />} type="password" placeholder="Password"/>
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button" >Log in</Button>
                <Button  type='link' onClick={() => navigate('/auth/register')}>Don't have an account?</Button>
      </Form.Item>
    </Form>
    </div>
      
    </>
   
  )
}

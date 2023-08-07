import React from 'react'
import { useNavigate } from 'react-router-dom'
import Actions from '../../redux/actions'
import { useDispatch} from 'react-redux'
import helperFunctions from '../../helpers'
import { useLocation } from 'react-router-dom'
import { Button, Form, Input , Image} from 'antd';
import { UserOutlined,LockOutlined } from '@ant-design/icons'
import styles from './Auth.module.css'
import logo from '../../images/logo/Color logo - no background.png'

const {SiteActions: {setCurrentUser,deleteCurrentUser}} = Actions
const {getFromLocalStorage} = helperFunctions


export default function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    dispatch(deleteCurrentUser());
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
                navigate('/');   
            }
            else{
                alert("Password Wrong")
            }
        }
        else{
            alert("Please Register First")
        }
        form.resetFields();
    }
    

  return (
    <>
    <div className={styles.formdiv}>
        <Form className={styles.FormStyle} form={form} onFinish={handleSubmit}>
            <Form.Item>
                <Image preview={false} width={300} src={logo}/>
            </Form.Item>
            <Form.Item name="uname" rules={[{ required: true, message: 'Please input your Username!' }]}>
                <Input prefix={<UserOutlined />} placeholder="Username" />
            </Form.Item>
            <Form.Item name="password" rules={[{ required: true, message: 'Please input your Password!' }]}>
                <Input  prefix={<LockOutlined />} type="password" placeholder="Password"/>
            </Form.Item>
            <Form.Item>
                <Button className={styles.button} type='primary' htmlType="submit" >Log in</Button>
                <Button  className={styles.buttonlink} type='link' onClick={() => navigate('/auth/register')}>Don't have an account?</Button>
            </Form.Item>
        </Form>
    </div>
      
    </>
   
  )
}

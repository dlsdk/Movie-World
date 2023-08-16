import React from 'react'
import { useNavigate } from 'react-router-dom'
import Actions from '../../redux/actions'
import { useDispatch} from 'react-redux'
import helperFunctions from '../../helpers'
import { Button, Form, Input , Image, Modal} from 'antd';
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
        const user = getFromLocalStorage(`user_${uname}`);
        if (user){
            if (password === user.password){
                dispatch(setCurrentUser(user));  
                localStorage.setItem('currentUser',JSON.stringify(user));
                navigate('/');   
            }
            else{
                Modal.error({
                    title: 'This is an error message',
                    content:  `Password Wrong!`,
                });
            }
        }
        else{
            Modal.info({
                content:  `Please Register First!`,
            });
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
            <Form.Item className={styles.buttoncontainer}>
                <Button type='link'className={styles.buttonlink} onClick={() => navigate('/auth/register')}>Don't have an account?</Button>
            </Form.Item>
            <Button type='primary' className={styles.button} htmlType="submit" >Log in</Button>
           
        </Form>
    </div>
      
    </>
   
  )
}

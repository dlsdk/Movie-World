import React, { useState } from 'react';
import { Form, Input, Button, Modal } from 'antd';
import { UserOutlined, LockOutlined, ExclamationCircleFilled } from '@ant-design/icons';
import helperFunctions from '../../helpers';
import styles from './ProfileForm.module.css';
import UpdateModal from '../UpdateModal/UpdateModal';

const { getFromLocalStorage } = helperFunctions;

export default function ProfileForm() {
    const [form] = Form.useForm();
    // const [inputValue, setInputValue] = useState('');
     const [visible,setVisible] = useState(false);
     const [uname,setUname] = useState('');
     const [password,setPassword] = useState('');

    // const changeUname = (uname) => {
         
    // const currentUser = getFromLocalStorage('currentUser');
    // console.log("eeey uname fonks");
    //     localStorage.setItem(
    //         `user_${uname}`,
    //         JSON.stringify({
    //             ...currentUser,
    //             uname,
    //         })
    //     );
    //     localStorage.setItem(
    //         'currentUser',
    //         JSON.stringify({
    //         ...currentUser,
    //             uname,
    //         })
    //     );
       
    //     localStorage.removeItem(`user_${currentUser.uname}`); 
    // }

    // const changePassword = (password) => {
    //     console.log('AYNIIII');

    //     const currentUser = getFromLocalStorage('currentUser');
    //     console.log("passwordda currentUserUname ne diye geliyor ? :",currentUser.uname)
    //     localStorage.setItem(
    //         `user_${currentUser.uname}`,
    //         JSON.stringify({
    //         ...currentUser,
    //         password}));
    //     localStorage.setItem(
    //         'currentUser',
    //         JSON.stringify({
    //         ...currentUser,
    //         password}));
       
    // }

    // const handleOk = (uname,password) => {
    //     const currentUser = getFromLocalStorage('currentUser');
    //     console.log("CURRENT user : ",currentUser,"inputValue = ",inputValue);
    //         if (inputValue === currentUser.password) { 
    //             console.log("ŞİFRE VE GİRİLEN İNPUT AYNI");
    //             console.log("Password ne ? :",password);
    //             if (password){ 
    //                 console.log("buraya girdi mi password");
    //                 changePassword(password)
    //             }
    //             if (uname){
    //                 console.log("buraya girdi mi uname");
    //                changeUname(uname)
    //             }
    //             setInputValue('');
    //         }
    //     setVisible(false);
    // }

    const handleSubmit = (values) => {
        const { uname, password } = values;
       setVisible(true);
       setPassword(password);
       setUname(uname);
       form.resetFields();
    }

    return (
        <div className={styles.formdiv}>
            <Form className={styles.form} form={form} onFinish={handleSubmit}>
                <Form.Item label="Change username" name="uname">
                    <Input prefix={<UserOutlined />} placeholder="Username" />
                </Form.Item>
                <Form.Item label="Change password" name="password">
                    <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
                </Form.Item>

                <Form.Item className={styles.buttoncontainer}>
                    <Button className={styles.button} type="primary" htmlType="submit">
                        Update Account Informations
                    </Button>
                </Form.Item>
            </Form>
            {/* <Modal
                title="Confirm Password"
                visible={visible}
                onOk={() => handleOk(uname,password)}
                onCancel={() => setVisible(false)}>
                <label htmlFor='confirmValue'>Please confirm your password!</label>
                <Input id='confirmValue' onChange={(e) => setInputValue(e.target.value)} />
            </Modal> */}
            <UpdateModal visible={visible} uname={uname} password={password} setVisible={setVisible}/>
        </div>
    );
}
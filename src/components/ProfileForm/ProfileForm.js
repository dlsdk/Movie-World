import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import styles from './ProfileForm.module.css';
import UpdateModal from 'components/UpdateModal/UpdateModal';


export default function ProfileForm() {
    const [form] = Form.useForm();
    const [visible,setVisible] = useState(false);
    const [uname,setUname] = useState('');
    const [password,setPassword] = useState('');

    const handleSubmit = (values) => {
        const { uname, password } = values;
        if (uname || password)
            setVisible(true);
       setPassword(password);
       setUname(uname);
       form.resetFields();
    }

    return (
        <div className={styles.formdiv}>
            <Form className={styles.form} form={form} onFinish={handleSubmit}  layout="vertical">
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
            <UpdateModal visible={visible} uname={uname} password={password} setVisible={setVisible}/>
        </div>
    );
}
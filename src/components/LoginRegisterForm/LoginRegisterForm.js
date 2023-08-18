import { Form, Button } from "antd";
import React from 'react'
import LoginRegisterFormItem from "components/LoginRegisterForm/LoginRegisterFormItem";
import styles from './LoginRegisterForm.module.css'
import { useNavigate } from "react-router-dom";


export default function LoginRegisterForm({fields,navigatePath,buttonTextFirst,buttonTextSecond,handleSubmit}) {

    const [form] = Form.useForm();
    const navigate = useNavigate();

  return (
    <div className={styles.formdiv}>
    <Form className={styles.FormStyle} form={form} onFinish={handleSubmit}>
        {fields.map((field) => (
            <LoginRegisterFormItem field={field}/>
        ))}
        <Form.Item className={styles.buttoncontainer}>
                <Button type='link'className={styles.buttonlink} onClick={() => navigate(navigatePath)}>
                    {buttonTextFirst}
                </Button>
        </Form.Item>
        <Button type='primary' className={styles.button} htmlType="submit" >{buttonTextSecond}</Button> 
    </Form>
    </div>
  )
}

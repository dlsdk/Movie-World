import { Form, Button } from "antd";
import React from 'react'
import FormItem from "components/Form/FormItem";
import styles from './Form.module.css'
import { useNavigate } from "react-router-dom";


export default function Forms(props) {

    const [form] = Form.useForm();
    const navigate = useNavigate();
    const {fields,navigatePath,buttonTextFirst,buttonTextSecond,handleSubmit} = props;

  return (
    <div className={styles.formdiv}>
    <Form className={styles.FormStyle} form={form} onFinish={handleSubmit}>
        {fields.map((field) => (
            <FormItem key={field.name} field={field}/>
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

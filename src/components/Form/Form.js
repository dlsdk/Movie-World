import { Form as ANTDFORM, Button } from "antd";
import React from 'react'
import FormItem from "components/Form/FormItem";
import styles from './Form.module.css'
import { useNavigate } from "react-router-dom";

export default function Form(props) {

    const [form] = ANTDFORM.useForm();
    const navigate = useNavigate();
    const {fields,navigatePath,buttonTextFirst,buttonTextSecond,handleSubmit} = props;

  return (
    <div className={styles.formdiv}>
    <ANTDFORM className={styles.FormStyle} form={form} onFinish={handleSubmit}>
        {fields.map((field) => (
            <FormItem key={field.name} field={field}/>
        ))}
        <ANTDFORM.Item className={styles.buttoncontainer}>
                <Button type='link'className={styles.buttonlink} onClick={() => navigate(navigatePath)}>
                    {buttonTextFirst}
                </Button>
        </ANTDFORM.Item>
        <Button type='primary' className={styles.button} htmlType="submit" >{buttonTextSecond}</Button> 
    </ANTDFORM>
    </div>
  )
}

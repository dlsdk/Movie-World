import React from 'react'
import { Form, Input } from 'antd'

export default function LoginRegisterFormItem({field}) {
  return (
    <Form.Item key={field.name} name={field.name} rules={field.rules}>
      {field.image ? 
        field.image
        :  
        <Input
            prefix={field.prefix}
            type={field.type}
            placeholder={field.placeholder}
            addonBefore={field.addonBefore}
          />
        }
       
    </Form.Item>
  )
}

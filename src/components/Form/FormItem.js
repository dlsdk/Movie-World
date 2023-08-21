import React from 'react'
import { Form, Input, Image } from 'antd'

export default function FormItem({field}) {
  const renderField = () => {
    switch (field.component) {
      case 'image':
        return (<Image {...field}/>);
      case 'input':
        return (
          <Input {...field} />
        );
      default:
        return;
    }
  };

  return (
    <Form.Item {...field}>
      {renderField()}
    </Form.Item>
  )
}

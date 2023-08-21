import logo from 'images/logo/Color logo - no background.png'
import { UserOutlined, LockOutlined } from '@ant-design/icons'

export const loginFields = [
    {
        type: 'image',
        component: 'image',
        src: logo,
        preview: 'false',
        width: 300,
    },
    {
        name: 'uname',
        rules: [{ required: true, message: 'Please input your Username!' }],
        prefix: <UserOutlined />,
        placeholder: "Username",
        type: 'text',
        component: 'input'
    },
    {
        name: 'password',
        rules: [{ required: true, message: 'Please input your Password!' }],
        prefix: <LockOutlined />,
        placeholder: 'Password',
        type: 'password',
        component: 'input'
    }
]

export const registerFields = [
    {
        name: 'uname',
        rules: [{ required: true, message: 'Please input your Username!' }],
        prefix: <UserOutlined />,
        placeholder: "Username",
        type: 'text',
        component: 'input'
    },
    {
        name: 'password',
        rules: [{ required: true, message: 'Please input your Password!' }],
        prefix: <LockOutlined />,
        placeholder: 'Password',
        type: 'password',
        component: 'input'
    },
    {
        name: 'confirmpass',
        rules: [{ required: true, message: 'Please confirm your Password!' }],
        prefix: <LockOutlined />,
        placeholder: "Confirm Password",
        type: 'password',
        component: 'input'
    }
]

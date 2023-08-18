import {Image} from 'antd'
import logo from 'images/logo/Color logo - no background.png'
import { UserOutlined,LockOutlined } from '@ant-design/icons'

    const loginFields = [
        {
           image: <Image preview={false} width={300} src={logo}/>,
        },
        {
            name:'uname',
            rules:[{ required: true, message: 'Please input your Username!' }],
            prefix: <UserOutlined />,
            placeholder:"Username",
            type:'text'
        },
        {
            name:'password',
            rules:[{ required: true, message: 'Please input your Password!' }],
            prefix:<LockOutlined />,
            placeholder:'Password',
            type:'password',
        }
    ]

    const registerFields = [
        {
            name:'uname',
            rules:[{ required: true, message: 'Please input your Username!' }],
            prefix: <UserOutlined />,
            placeholder:"Username",
            type:'text'
        },
        {
            name:'password',
            rules:[{ required: true, message: 'Please input your Password!' }],
            prefix:<LockOutlined />,
            placeholder:'Password',
            type:'password',
        },
        {
            name:'confirmpass',
            rules:[{ required: true, message: 'Please confirm your Password!' }],
            prefix:<LockOutlined />,
            placeholder:"Confirm Password",
            type:'password',
        }
    ]

const Fields = {loginFields,registerFields}
export default Fields;
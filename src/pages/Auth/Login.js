import React from 'react'
import { useNavigate } from 'react-router-dom'
import helperFunctions from 'helpers'
import { Form as ANTDFORM, Modal} from 'antd';
import Form from 'components/Form/Form';
import { loginFields } from 'helpers/Fields';

const { localStorageHelperFunctions: {getFromLocalStorage} } = helperFunctions

export default function Login() {
    
console.log("RENDER : LOGİN.JS")
    const navigate = useNavigate();
    const [form] = ANTDFORM.useForm();
    localStorage.removeItem('currentUser');

    // eğer böyle bir user varsa önce şifrenin doğruluğunu kontrol et doğruysa currentUserı user olarak ayarla
    const handleSubmit = (values) => {
        const {uname, password} = values;
        const user = getFromLocalStorage(`user_${uname}`); 
        if (user){
            if (password === user.password){
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
    <Form fields={loginFields} navigatePath={'/auth/register'} 
    handleSubmit={handleSubmit}  buttonTextFirst={"Don't have an account?"} 
    buttonTextSecond={'Log in'}/>
  )
}
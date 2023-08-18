import React , { useState }  from 'react'
import { Input, Modal } from 'antd';
import helperFunctions from '../../helpers';

const { localStorageHelperFunctions: {getFromLocalStorage} } = helperFunctions

export default function UpdateModal({visible,uname,password,setVisible}) {

    const [inputValue, setInputValue] = useState('');
     
    const changeUname = (uname) => {
         
        const currentUser = getFromLocalStorage('currentUser');
            localStorage.setItem(
                `user_${uname}`,
                JSON.stringify({
                    ...currentUser,
                    uname,
                })
            );
            localStorage.setItem(
                'currentUser',
                JSON.stringify({
                ...currentUser,
                    uname,
                })
            );
            localStorage.removeItem(`user_${currentUser.uname}`); 
        }
    
        const changePassword = (password) => {
            
            const currentUser = getFromLocalStorage('currentUser');

            localStorage.setItem(
                `user_${currentUser.uname}`,
                JSON.stringify({
                ...currentUser,
                password}));
            localStorage.setItem(
                'currentUser',
                JSON.stringify({
                ...currentUser,
                password}));
           
        }
    
        const handleOk = (uname,password) => {
            
            const currentUser = getFromLocalStorage('currentUser');

                if (inputValue === currentUser.password) { 
                    if (password){ 
                        changePassword(password)
                    }
                    if (uname){
                       changeUname(uname)
                    }
                    Modal.success({
                        content:  'Updating completed successfully',
                    });
                }
                else{
                    Modal.error({
                        title: 'This is an error message',
                        content:  `Password Wrong!`,
                    });
                } 
            setInputValue('');
            setVisible(false);
        }

        const handleCancel = () => {
            setInputValue('');
            setVisible(false);
        };
    

  return (
    <Modal
        title="Confirm Password"
        visible={visible}
        onOk={() => handleOk(uname,password)}
        onCancel={handleCancel}>
        <label htmlFor='confirmValue'>Please confirm your password!</label>
        <Input id='confirmValue' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
    </Modal>
  )
}

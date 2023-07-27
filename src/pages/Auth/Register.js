import React from 'react'
import Actions from '../../redux/actions'
import { useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import helperFunctions from '../../helpers'

const {SiteActions: {addUser,deleteCurrentUser}} = Actions 
const {getAllLocalStorageValues} = helperFunctions
localStorage.removeItem('currentUser');

export default function Register() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    dispatch(deleteCurrentUser());
  
    const handleSubmit = (e) => {
    e.preventDefault();

    const uname = e.target.uname.value;
    const password = e.target.password.value;
    const confirmpass = e.target.confirmpass.value;
    const id = localStorage.length === 0 ? 1 : Math.max(...getAllLocalStorageValues().map(data => data.id)) + 1;


    if (password === confirmpass){
        const user = JSON.parse(localStorage.getItem(`user_${uname}`))
        if (user){
            alert("Already have account");
        }
        else{
            let userPayload = { id,
                uname,
                password
            }
            dispatch(addUser(userPayload));
            localStorage.setItem(`user_${uname}`,JSON.stringify(userPayload))
            alert("Registration completed successfully");
        }
        navigate('/auth/login');
    } 
    else{
        alert("Passwords doesn't match!")
    }
}
  return (
    <div className="form" onSubmit={handleSubmit}>
    <form>
        <div className="input-container">
            <label htmlFor='uname'>Username </label>
            <input id='uname' type="text" required />
         </div>
        <div className="input-container">
            <label htmlFor='password'>Password </label>
            <input id='password' type="password" required />
        </div>
        <div className="input-container">
            <label htmlFor='password'>Confirm Password </label>
            <input id='confirmpass' type="password" required />
        </div>
        <div className="button-container">
            <button>Login</button>
        </div>
    </form>
</div>
  )
}

import React from 'react'
import { useNavigate } from 'react-router-dom'
import Actions from '../../redux/actions'
import { useDispatch} from 'react-redux'
import helperFunctions from '../../helpers'

const {SiteActions: {setCurrentUser,deleteCurrentUser}} = Actions
const {getFromLocalStorage} = helperFunctions
localStorage.removeItem('currentUser');


export default function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    dispatch(deleteCurrentUser());
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const uname = e.target.uname.value
        const user = getFromLocalStorage(`user_${uname}`);
        console.log(user);
        if (user){
            dispatch(setCurrentUser(user));  
            localStorage.setItem('currentUser',JSON.stringify(user));
            navigate('/');
        }
        else{
            alert("Please Register First")
            navigate('/auth/register');
        }
    }

  return (
    //FORMİK İLE VALİDATE YAP
    <>
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
            <div className="button-container">
                <button>Login</button>
            </div>
        </form>
     </div>
     <button onClick={e => navigate('/auth/register')}>Create account</button> {/*register sayfasına yönlendir*/}
    </>
   
  )
}

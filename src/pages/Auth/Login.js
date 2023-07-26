import React from 'react'
import selectors from '../../redux/selectors'
import Actions from '../../redux/actions'
import { useDispatch,useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import helperFunctions from '../../helpers'


export default function Login() {
    const {SiteSelectors: {selectUsers,selectNumberOfUsers}} = selectors
    const {SiteActions: {addUser}} = Actions
    const {getUserWithUname} = helperFunctions
    const dispatch = useDispatch();
    const users = useSelector(selectUsers);
    const NumberOfUsers = useSelector(selectNumberOfUsers)
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        // girilen kullanıcı ismi ile kullanıcı var mı ? varsa login işlemini yap.
        // yoksa register a yönlendir 
        const uname = e.target.uname.value
        e.preventDefault();
        console.log("handleSubmit function");
        const user = JSON.parse(localStorage.getItem('user'))
        if (user && user.uname === uname){
            console.log("zaten bu kullanıcı var LOGIN PAGE") 
            navigate('/');
        }
        else{
            console.log("kullanıcı yok registera yönlendir LOGIN PAGE")
            console.log(users);
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
     <button>Create account</button> {/*register sayfasına yönlendir*/}
    </>
   
  )
}

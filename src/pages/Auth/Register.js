import React from 'react'
import selectors from '../../redux/selectors'
import Actions from '../../redux/actions'
import { useDispatch,useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import helperFunctions from '../../helpers'

export default function Register() {

    const {SiteSelectors: {selectUsers,selectNumberOfUsers}} = selectors
    const {SiteActions: {addUser}} = Actions
    const {getUserWithUname} = helperFunctions
    const dispatch = useDispatch();
    const users = useSelector(selectUsers);
    const NumberOfUsers = useSelector(selectNumberOfUsers);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
     // hesap gerçekten var mı yok mu?
     // hesap varsa uyarı versin ve login page e yönlendirsin
     // hesap yoksa gerçekten şifreler eşleşiyor mu ona baksın eşleşiyorsa eklesin localstroge a da kaydetsin

     e.preventDefault();
     console.log("handleSubmit function REGISTER PAGE");
     const uname = e.target.uname.value;
     const password = e.target.password.value;
     const confirmpass = e.target.confirmpass.value;

    if (password === confirmpass){
        const user = JSON.parse(localStorage.getItem('user'))
        if (user && user.uname === uname){
            console.log("zaten bu kullanıcı var REGISTER PAGE") 
            alert("KULLANICI ZATEN VAR");
        }
        else{
            console.log("bu kullanıcı yok REGISTER PAGE")
            let userPayload = { id:1,
                uname,
                password
            }
            dispatch(addUser(userPayload));
            localStorage.setItem(`user`,JSON.stringify(userPayload))
            alert("KAYIT BAŞARILI");
        }
        navigate('/auth/login');
    } 
    else{
        alert("ŞİFRELER EŞLEŞMİYOR")
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

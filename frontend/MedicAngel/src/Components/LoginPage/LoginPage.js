import "./style.css";
import { useState , useEffect} from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import userService from '../../services/user.service';
import Footer from "../Footer/Footer";
const LoginPage = () => {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error,setError]=useState();
    const [valid,setValid]=useState();

  
  
    const history = useHistory();
  
    const login = (e) => {
      e.preventDefault();
  
      const user = {
        email,
        password,
      };

        userService
          .signin(user)
          .then((response) => { 
            setValid("Valid Login")
            sessionStorage.setItem("user", JSON.stringify(response.data.jwt));
            history.push("/user/profile")
            return response.data;
           })
.catch((error) => {
            console.log('something went wrong' + error.response);
            setError('Invalid Username or Password');
          });

    };

    return (<div>
        <div className="form-box" style={{backgroundColor:"dark"}}>
            <div className="header-text text-white" >
                Login 
            </div><input placeholder="Your Email Address" type="text" value={email}
            onChange={(e) => setEmail(e.target.value)}/>
            <input placeholder="Your Password" type="password" value={password}
            onChange={(e) => setPassword(e.target.value)} />
            
            {/* <span className="text-white">Agree with <a href="" className="text-white">Terms & Conditions</a></span> */}
             <button  onClick={(e) => login(e)}>login</button>
            {error?<div style={{color:"red", textAlign: "center" }}>{error}</div>:<div style={{color:"red", textAlign: "center" }}>{valid}</div>}
            <span  ><a href="/add/user" className="text-white">Create Account</a></span>
            
        </div>
    </div>);

}

export default LoginPage;
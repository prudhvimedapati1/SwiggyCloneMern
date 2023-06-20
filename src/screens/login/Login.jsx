import React,{useState} from 'react'
import './login.css'
import { Link, useNavigate } from 'react-router-dom'
import { BASE_URL } from "../baseurl";

const Login = () => {
  let navigate = useNavigate();
  const [cred, setcred] = useState({email:"",password:""})

    const handleSubmit= async(e)=>{
        e.preventDefault();
        const response = await fetch(`${BASE_URL}/api/loginuser`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({email:cred.email,password:cred.password})    
        });

        const json=await response.json();
        if(!json.success){
            alert('Enter valid credentials')
            console.log(json.error);
        }
        else{
          localStorage.setItem("userEmail",cred.email)
          localStorage.setItem("authToken",json.authToken)
          navigate("/")
        }

    }

    const onChange =(e)=>{
        setcred({...cred,[e.target.name]:e.target.value})
    }
  return (
    <div>
      <div className="login__container">
        <form  onSubmit={handleSubmit} className="signup__form">
            <h1 className="signup__title">Login</h1>
            
            <div className="form__email form__field">
                <label htmlFor="exampleInputEmail" className="form__label">Your Email Address</label>
                <input className="form__input" type="email" placeholder="Type here" name="email" value={cred.email}onChange={onChange}/>
            </div>
            <div className="form__password form__field">
                <label htmlFor="exampleInputPassword" className="form__label">Your password</label>
                <input className="form__input" type="password" placeholder="Type here" name="password" value={cred.password} onChange={onChange}/>
            </div>
            <button type="submit" className="form__button">Login</button>
            <Link to={'/signup'} className="signup__login">New User? Click here</Link>
        </form>
      </div>
    </div>
  )
}

export default Login
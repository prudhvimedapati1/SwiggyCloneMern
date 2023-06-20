import React,{useState} from "react";
import "./signup.css";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../baseurl";

const Signup = () => {
    let navigate = useNavigate();

    const [cred, setcred] = useState({name:"",email:"",password:"",geolocation:""})

    const handleSubmit= async(e)=>{
        e.preventDefault();
        const response = await fetch(`${BASE_URL}/api/createuser`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({name:cred.name,email:cred.email,password:cred.password,location:cred.geolocation})    
        });

        const json= await response.json();
        if(!json.success){
            alert('Enter valid credentials')
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
    <div className="signup__background">
      <div className="signup__container">
        <form  onSubmit={handleSubmit} className="signup__form">
            <h1 className="signup__title">Sign Up</h1>
            <div className="form__name form__field">
                <label htmlFor="name" className="form__label">Your Name</label>
                <input className="form__input" type="text" placeholder="Type here" name="name" value={cred.name} onChange={onChange}/>
            </div>
            <div className="form__email form__field">
                <label htmlFor="exampleInputEmail" className="form__label">Your Email Address</label>
                <input className="form__input" type="email" placeholder="Type here" name="email" value={cred.email}onChange={onChange}/>
            </div>
            <div className="form__password form__field">
                <label htmlFor="exampleInputPassword" className="form__label">Set up a password</label>
                <input className="form__input" type="password" placeholder="min 5 characters.." name="password" value={cred.password} onChange={onChange}/>
            </div>
            <div className="form__address form__field">
                <label htmlFor="" className="form__label">Your Address</label>
                <input className="form__input" type="text" placeholder="" name="geolocation" value={cred.geolocation} onChange={onChange}/>
            </div>
            <button type="submit" className="form__button">Register</button>
            <Link to={'/login'} className="signup__login">Existing User? Click here</Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;

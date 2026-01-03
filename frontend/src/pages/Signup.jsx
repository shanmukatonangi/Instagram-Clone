import React from 'react'
import './signup.css'
import { useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Signup = () => {
    const email=useRef();
    const password=useRef();
    const fullname=useRef();
    const username=useRef();
    const navigate=useNavigate()

    function Signup(){
        try {
            const userdetails={
            email:email.current.value,
            password:password.current.value,
            fullname:fullname.current.value,
            username:username.current.value
        }

        axios.post('http://localhost:8888/register',userdetails)
        localStorage.setItem("username",username.current.value)
        navigate("/login")

        } catch (error) {
            alert(error)
        }
    }
  return (
    <div id='signuppage'>
        <div id='details'>
            <div id='facebook'>
                <img src='src/assets/OIP.jpeg' style={{height:"70px"}} />
                <h2>Sign up to see photos and videos from your friends.</h2>
                <button>Login in with facebook</button>
            </div>
            <div id='user-details'>
                <input type="text" placeholder='Mobile Number or Email' ref={email} />
                <input type="text" placeholder='Password' ref={password} />
                <input type="text" placeholder='Full Name' ref={fullname} />
                <input type="text" placeholder='Username' ref={username} />
                <p>People who use our service may have uploaded your contact information to Instagram. Learn More</p>
                <p>By signing up, you agree to our Terms , Privacy Policy and Cookies Policy .</p>
                <button onClick={Signup}>Sign up</button>
            </div>
        </div>
        <div id='login'>
            <p>Have an account ?</p>
            <p>Login</p>
        </div>

      
    </div>
  )
}

export default Signup

import React, { useRef } from 'react'
import "./login.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'




const Login = () => {
    let email=useRef()
    let password=useRef()
    let navigate=useNavigate()


async function Login(){
   try{
     let userdetails={
        email:email.current.value,
        password:password.current.value
    };
let login=await axios.post("http://localhost:8888/login",userdetails)
console.log(login.data)
if(login.data.message=="User with email not found"){
    alert("Email not found")
}
else if (login.data.message="Success"){
    navigate("/home")
}


   }catch(err){
    alert(err)
   }

}

  return (
    <div id="login">
        <div id='banner'></div>
        <div id='details-login'>
            <div id='facebook'>
                <img src='src/assets/OIP.jpeg' style={{height:"70px"}} />
               
            </div>
            <div id='user-details-login'>
                <input type="text" placeholder='mobile number or email or username'ref={email} />
                <input type="text" placeholder='Password' ref={password} />
                
                
                <button onClick={Login}>Login</button>
            </div>
        <div id='login-det'>
            <p>Have an account ?</p>
            <p>Login</p>
        </div>
        </div>

      
    </div>
  )
}

export default Login

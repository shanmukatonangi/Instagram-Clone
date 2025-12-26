import React from 'react'
import "./login.css"



const Login = () => {
  return (
    <div id="login">
        <div id='banner'></div>
        <div id='details-login'>
            <div id='facebook'>
                <img src='src/assets/OIP.jpeg' style={{height:"70px"}} />
               
            </div>
            <div id='user-details-login'>
                <input type="text" placeholder='mobile number or email or username' />
                <input type="text" placeholder='Password' />
                
                
                <button>Login</button>
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

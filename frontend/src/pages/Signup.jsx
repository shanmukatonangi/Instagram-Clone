import React from 'react'
import './signup.css'


const Signup = () => {
  return (
    <div id='signuppage'>
        <div id='details'>
            <div id='facebook'>
                <img src='src/assets/OIP.jpeg' style={{height:"70px"}} />
                <h2>Sign up to see photos and videos from your friends.</h2>
                <button>Login in with facebook</button>
            </div>
            <div id='user-details'>
                <input type="text" placeholder='Mobile Number or Email' />
                <input type="text" placeholder='Password' />
                <input type="text" placeholder='Full Name' />
                <input type="text" placeholder='Username' />
                <p>People who use our service may have uploaded your contact information to Instagram. Learn More</p>
                <p>By signing up, you agree to our Terms , Privacy Policy and Cookies Policy .</p>
                <button>Sign up</button>
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

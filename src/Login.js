import React, { useState } from 'react'
import './Login.css'
import SignInScreen from './SignInScreen';

function Login() {
  const [signIn , setSignIn] =useState(false);
  return (
    <div className="Login">
        <div className="Login__background">
            <img className="Login__Logo"
             src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'
             alt='logo'
            style={{height:"80px",
                   width:"150px",
                   position:"fixed",
                   objectFit:"contain",
                   paddingLeft:"25px"

        }}  > 
            </img>

         <button className="Sign-in__button" onClick={()=>setSignIn(true)}>
          Sign In
         </button>

         <div className="Login__gradient"></div>
          
          <div className="Login__body" style={{textAlign:"center",
         marginLeft:"auto", marginRight:"auto"}}
           >
            {signIn ? (
               <SignInScreen/>  ) :(

                <>
                <h1>Unlimited films, TV programmes and more.   </h1>
                <h2>Watch anywhere. Cancel at any time.</h2>
                <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                <div className="Login__input">
                <form> 
                <input type='email' placeholder='Email Address'/>
                <button className="email_button" onClick={()=>setSignIn(true)}> GET STARTED            
                </button>
      
                   </form>
      
                </div>
                </>

            )}
        

          </div>
         
        </div>
      
    </div>
  )
}

export default Login

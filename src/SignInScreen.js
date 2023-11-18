import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase'; // Assuming this file exports the initialized Firebase app

import './SignInScreen.css';
import SignupScreen from './SignupScreen';

function SignInScreen() {
   const [email, setEmail] =useState('');
   const [password, setPassword] =useState('');

   const [signUp,setSignup ] =useState(false);


    

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email,password)
    .then((userCredential)=>{
      console.log(userCredential)
    }).catch((error)=>{
      alert("New User Signup now" ,error.message)
    })
    
    
  };


  return (
   
    <div className="sign__In">
       {signUp ? (
      <SignupScreen/>  ) :(
      <form>
        <h1>Sign In</h1>
        <input type="email" placeholder="Email" 
        onChange={(e)=>setEmail(e.target.value)}
        />
        <input  type="password" placeholder="Password"
        onChange={(e)=>setPassword(e.target.value)}
        />
        <button type="submit" onClick={signIn}>
          Sign In
        </button>

        <h4>
          <span className="signup_grey">New to Netflix?</span>
          <span className="signup_link" onClick={()=>setSignup(true)} >
            Sign Up now
          </span>
        </h4>
      </form>
      )}
    </div>
      
  );
}

export default SignInScreen;

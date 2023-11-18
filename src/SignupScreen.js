import React , {useState} from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase'; // Assuming this file exports the initialized Firebase app
import './SignupScreen.css'
import { useNavigate } from 'react-router-dom';

function SignupScreen() {

    const [email, setEmail] =useState('');
   const [password, setPassword] =useState('');

   const history= useNavigate();

    const register=(e)=>{
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email,password)
        .then((userCredential)=>{
          console.log(userCredential)
        }).catch((error)=>{
          alert("Ex- random@gmail.com , password>=6",error.message)
        })
        
      }
  return (
    <div className='SignupScreen'>
       <form>
        <h1>Sign Up</h1>
        <input type="email" placeholder="Email" 
        onChange={(e)=>setEmail(e.target.value)}
        />
        <input  type="password" placeholder="Password"
        onChange={(e)=>setPassword(e.target.value)}
        />
        <button type="submit" onClick={(e) => { register(e); history("/"); }}>
  Sign Up
</button>
       
      </form>
    </div>
  )
}

export default SignupScreen

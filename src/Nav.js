import React, { useEffect, useState } from 'react'
import  { useNavigate } from 'react-router-dom'
import './Nav.css'

function Nav() {

   const [show ,handleShow]= useState(false);
   const history = useNavigate();

   const transitionNav=()=>{
    if(window.scrollY>100){
      handleShow(true);
    }
    else{
      handleShow(false);
    }
   }

  useEffect(()=>{

    window.addEventListener("scroll",transitionNav);
    return ()=> window.removeEventListener("scroll", transitionNav);

  },[])

  return (
    <div className={`nav ${ show && "nav__bg"}`}>

        <div className="nav__contents">

        <img className="netflix__logo"
        src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png' alt='netflix-logo'
        onClick={()=>history('/')}
        ></img>
        
        <img className="nav__avatar"
        
        src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt='user'
        
         onClick={()=>history("/profile")}
        ></img>
      

        </div>
       
    </div>
  )
}

export default Nav

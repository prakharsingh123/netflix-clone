import React from 'react'

import Nav from './Nav'
import {auth} from './firebase'
import {useSelector} from 'react-redux';
import {selectUser } from './features/counter/userSlice';
import './profileScreen.css'

function ProfileScreen() {
  
  const user= useSelector(selectUser);



  return (
    <div className='profileScreen'>
        <Nav/>
      <div className='profileScreen__body'>
        <h1>Edit profile</h1>

        <div className='profileScreen__info'>

        <img className='avatar' src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt='logo'></img>
       </div>

      <div className='profileScreen__details'>
        <h2>{user.email}</h2>

       <div className='profileScreen__plans'>
        <button className='profileScreen__button'
        onClick={()=>auth.signOut()}>Sign Out</button>
         </div>

      </div>


      </div>


    </div>
  )
}

export default ProfileScreen

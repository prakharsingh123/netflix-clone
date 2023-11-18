import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HomeScreen from './HomeScreen';
import Login from './Login';
import {auth} from './firebase';
import {useDispatch, useSelector} from 'react-redux';
import {login, logout, selectUser } from './features/counter/userSlice';
import ProfileScreen from './profileScreen';



function App() {

const user = useSelector(selectUser);
const dispatch = useDispatch();

  useEffect(()=>{
   const unsubscribe= auth.onAuthStateChanged((userAuth)=>{
    if(userAuth){
      console.log(userAuth);
      dispatch (
        
        login({
        uid: userAuth.uid,
        email: userAuth.email,
      })
      );
    }else{
      //loggedout
      dispatch(logout());
    }

   });
  return unsubscribe;

  }, [dispatch]);


  return (
    <div className="app">
      <React.Fragment>
        <Router>
          {!user ? (
            <Login />
          ):(
            <Routes>
              <Route path="/profile" element={<ProfileScreen/>}>
              </Route>
            <Route path="/" element={<HomeScreen />} />
          </Routes>
          )}
         
        </Router>
      </React.Fragment>
    </div>
  );
}

export default App;

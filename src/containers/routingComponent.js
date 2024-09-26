import React from 'react';
import {
    Routes,
    Route,
  } from "react-router-dom";
import LandingPage from '../pages/LandingPage/LandingPage';
import Homepage from '../pages/Homepage/Homepage';
import ProfilePage from '../pages/ProfilePage/ProfilePage';
import Community from '../pages/Community/Community';
import SignIn from '../pages/SignIn/SignIn';
import SignUp from '../pages/SignUp/SignUp';

const routingComponent = ({ setAuth, isUserAuth }) => {
  return (
    <>
        {/* When you are building a component/feature/page add it to here to see your changes in realtime when you do npm start*/}
        <Routes>
          {/* <Route path='/' element={<Homepage />} /> */}
          <Route path='/' element={(isUserAuth) ? <Homepage /> : <LandingPage />} />
          {/* <Route path='/home' element={(isUserAuth) ? <Homepage /> : <SignIn setAuth={setAuth}/>} /> */}
          <Route path='/community' element={<Community />} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='/signin' element={<SignIn setAuth={setAuth}/>} />
          <Route path='/signup' element={<SignUp setAuth={setAuth}/>} />
        </Routes>
    </>
  )
}

export default routingComponent
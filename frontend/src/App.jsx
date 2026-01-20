import React from 'react'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Profile from './pages/Profile'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Explore from './pages/Explore'

const App = () => {
  return (
    <>
    
    <Routes>

      <Route path="/" element={<Signup  />}/>
      <Route path="/login" element={<Login  />}/>
      <Route path="/home" element={<Home />}/>
      <Route path="/profile-page/:username" element={<Profile />}/>
      <Route path='/explore' element={<Explore />} />






    </Routes>
    
    
    
    
    </>
  )
}

export default App

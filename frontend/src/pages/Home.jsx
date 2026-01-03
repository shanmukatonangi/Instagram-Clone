import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

  
    let username=localStorage.getItem("username")

   
  return (
    <div>
      im home
      <Link to={`/profile-page/${username}`}>Go to Profile</Link>
    </div>
  )
}

export default Home

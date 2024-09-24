import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  const handleSignUpClick = () => {
    navigate('/SignUp')
  }

  return (
    <div>
      Home
      <button onClick={handleSignUpClick}>Go to Sign Up</button>
    </div>
  )
}

export default Home
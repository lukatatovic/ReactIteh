import React from 'react'
import { useNavigate } from 'react-router-dom';

import logo from '../assets/logo.png';

const Home = () => {
  const navigate = useNavigate(); 
  return (
    <div className='bg-light-green-cyan'>
      <div className='flex justify-center items-center h-screen flex-col'>
        <img
          src={logo}
          className='w-1/2 cursor-pointer'
          onClick={() => navigate('/dashboard')}
          alt='spliwise-logo'
        />
      </div>
    </div>
  )
}

export default Home
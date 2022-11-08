import React from 'react'
import LoginForm from '../components/LoginForm'

const login = () => {
  return (
    <div className='bg-Main h-screen w-screen'>
        <div className='flex justify-center items-center py-10'>
            <LoginForm />
        </div>
    </div>
  )
}

export default login
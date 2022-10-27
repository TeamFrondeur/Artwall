import React from 'react'

import UserForm from '../components/UserForm'

const login = () => {
  return (
    <div className='bg-Main h-screen w-screen'>
        <div className='flex justify-center items-center py-10'>
            <UserForm type={"Login"}/>
        </div>
    </div>
  )
}

export default login
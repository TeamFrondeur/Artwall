import React from 'react'

import UserForm from '../components/UserForm'

const registration = () => {
  return (
    <div className='bg-Main h-screen w-screen'>
        <div className='flex justify-center items-center py-10'>
            <UserForm type={"Register"}/>
        </div>
    </div>
  )
}

export default registration
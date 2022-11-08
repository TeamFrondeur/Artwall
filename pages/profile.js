import React from 'react'
import ProfileCard from '../components/ProfileCard'
import ProflieArt from '../components/ProflieArt'

const profile = () => {
  return (
    <div className='bg-Main h-screen w-screen'>
        <div className='flex flex-row'>
            <div className='px-5 py-5'>
                <ProfileCard name="placeholder"/>
            </div>
            <div className='bg-red-500 '>
              <ProflieArt />
            </div>
        </div>
    </div>
  )
}

export default profile
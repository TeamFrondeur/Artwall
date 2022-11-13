import React from 'react'
import ProfileCard from '../components/ProfileCard'
import ProflieArt from '../components/ProflieArt'

const profile = () => {
  return (
    <div className='bg-Main'>
        <div className='flex flex-row'>
            <div className='px-5 py-5'>
                <ProfileCard name="placeholder"/>
            </div>
            <div className='my-5 mx-5 rounded-md'>
              <div className='bg-Card rounded-md'>
                <h1 className='px-3 py-1 text-3xl font-Space text-white'>Active Listings</h1>
              </div>
              <div className='grid grid-cols-2 py-2 justify-items-center'>
                <ProflieArt />
                <ProflieArt />
              </div>
              <div className='bg-Card rounded-md'>
                <h1 className='px-3 py-1 text-3xl font-Space text-white'>Inventory</h1>
              </div>
              <div className='grid grid-cols-2 py-2 justify-items-center'>
                <ProflieArt />
                <ProflieArt />
              </div>
            </div>
        </div>
    </div>
  )
}

export default profile
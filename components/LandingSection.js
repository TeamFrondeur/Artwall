import React from 'react'
import ArtCard from './ArtCard'

const LandingSection = () => {
  return (
    <div className='grid grid-cols-2 gap-20 mx-40 my-6 items-between'>
        <h1 className='text-white font-Space text-3xl font-normal'>Discover, Collect and Bid for your favorite arts!</h1>
        <ArtCard />
    </div>
  )
}

export default LandingSection
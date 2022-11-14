import React from 'react'
import BidCard from './BidCard'

const BidSection = () => {
  return (
    <div className='bg-Card flex flex-col'>
      <div>
        <BidCard />
      </div>
      <div className='my-10 flex flex-col justify-center gap-5 items-center'>
        <input type={'text'} placeholder="Input New Bid" className='sm form-input rounded-md' />
        <button className='btn border-primary border-2 text-white font-Space'>Submit</button>
      </div>
    </div>
  )
}

export default BidSection
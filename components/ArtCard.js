import React from 'react'
import Image from 'next/image'
const ArtCard = ({image, artname, artist, bid, bidders, timer}) => {
  return (
    <div className='bg-Card h-[29rem] w-[22rem] rounded-md flex flex-col font-Space'>
      <Image src='/images/flower3.jpg' className='rounded-lg self-center my-6' alt='' width='200' height='100'/>
      <div className='flex flex-row justify-between px-6'>
        <h1 className='text-lg text-white'>Ensalada y Sol</h1>
        <Image src='/images/prerana.PNG' width='45' height='45' className='rounded-full' alt='' />
      </div>
      <div className='flex flex-row py-2 px-2 justify-around'>
        <ul className='flex flex-col items-center'>
          <li>
            <h2 className='text-gray-500 text-lg'>Current Bid</h2>
          </li>
          <li>
            <h3 className='text-white text-md'>100,000 BDT</h3>
          </li>
        </ul>
        <ul className='flex flex-col items-center'>
          <li>
            <h2 className='text-gray-500 text-lg'>Bidders</h2>
          </li>
          <li>
            <h3 className='text-white text-md'>900</h3>
          </li>
        </ul>
        <ul className='flex flex-col items-center'>
          <li>
            <h2 className='text-gray-500 text-lg'>Ending In</h2>
          </li>
          <li>
            <h3 className='text-white text-md'>10h 43m 26s</h3>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ArtCard
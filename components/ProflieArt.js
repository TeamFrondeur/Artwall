import React from 'react'
import { useState, useEffect } from 'react';
import Image from 'next/image';

const ProflieArt = ({artName,  currentBid, numBidders, artPath, imagePath, endTime}) => {
    return (
      <div className='bg-Card h-[24rem] w-[22rem] rounded-md flex flex-col justify-evenly font-Space'>
        <Image src={`/images/arts/${artPath}`} className='rounded-lg self-center my-6' alt='' width='150' height='150'/>
      <div className='flex flex-row justify-between items-center px-6'>
        <h1 className='text-lg text-white'>{artName}</h1>
        <Image src={`/images/profiles/${imagePath}`} width='45' height='45' className='rounded-full' alt='' />
      </div>
      <div className='flex flex-row py-2 px-2 justify-around'>
        <ul className='flex flex-col items-center'>
          <li>
            <h2 className='text-gray-500 text-lg'>Current Bid</h2>
          </li>
          <li>
            <h3 className='text-white text-md'>{currentBid}</h3>
          </li>
        </ul>
        <ul className='flex flex-col items-center'>
          <li>
            <h2 className='text-gray-500 text-lg'>Bidders</h2>
          </li>
          <li>
            <h3 className='text-white text-md'>{numBidders}</h3>
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

export default ProflieArt
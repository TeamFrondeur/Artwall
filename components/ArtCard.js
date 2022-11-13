import React from 'react'
import Image from 'next/image'
import { useState, useEffect } from 'react';

const ArtCard = () => {
  
  const [dataResponse, setDataResponse] = useState([]);

  useEffect(() => {
    async function getPageData() {
        const apiUrlEndpoint = `http://localhost:3000/api/gettrendingart`;
        const response = await fetch(apiUrlEndpoint);
        const res = await response.json();
        console.log(res.results);
        setDataResponse(res.results);
    }
    getPageData();
  }, [])
  

  return (
    <div className='bg-Card h-[29rem] w-[22rem] rounded-md flex flex-col font-Space'>
      <Image src={`/images/${dataResponse.artPath}`} className='rounded-lg self-center my-6' alt='' width='200' height='100'/>
      <div className='flex flex-row justify-between px-6'>
        <h1 className='text-lg text-white'>{dataResponse.artName}</h1>
        <Image src={`/images/${dataResponse.imagePath}`} width='45' height='45' className='rounded-full' alt='' />
      </div>
      <div className='flex flex-row py-2 px-2 justify-around'>
        <ul className='flex flex-col items-center'>
          <li>
            <h2 className='text-gray-500 text-lg'>Current Bid</h2>
          </li>
          <li>
            <h3 className='text-white text-md'>{dataResponse.currentBid} BDT</h3>
          </li>
        </ul>
        <ul className='flex flex-col items-center'>
          <li>
            <h2 className='text-gray-500 text-lg'>Bidders</h2>
          </li>
          <li>
            <h3 className='text-white text-md'>{dataResponse.numBidders}</h3>
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
import React from 'react'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import Image from 'next/image';

const BidderCard = ({image, name}) => {

  // const [dataResponse, setDataResponse] = useState([]);
  // useEffect(() => {
  //   async function getBiddersData() {
  //     const response = await fetch('/api/getbidders', {
  //       method: 'POST',
  //       body: JSON.stringify({ bidArt: artname }),
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     });

  //     const res = await response.json();
  //     setDataResponse(res.results);
  //     console.log(dataResponse);

  //   }
  //   getBiddersData();
  // }, []);



  return (
      <div className='bg-[#3e475e] mx-3 my-3 rounded-l-full rounded-r-full flex flex-row justify-between items-center'> 
        <Image 
          src={`/images/profiles/${image}`}
          width={100}
          height={100}
          className='rounded-full '
          alt=''
        />
        <h1 className='px-6 text-3xl text-white font-Space'>{name}</h1>
      </div>
  )
}

export default BidderCard
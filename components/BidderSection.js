import React from 'react'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import Image from 'next/image';

const BidderSection = () => {

  const [dataResponse, setDataResponse] = useState();
  const router = useRouter();
  const { artname } = router.query;
  useEffect(() => {
    async function getBiddersData() {
      const response = await fetch('/api/getbidders', {
        method: 'POST',
        body: JSON.stringify({ artName: artname }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const res = await response.json();
      setDataResponse(res.results);
      // console.log(dataResponse);

    }
    // getBiddersData();
  }, [router.query.artname, router.isReady]);



  return (
    <div className='bg-[#3e475e] w-[15rem] flex flex-col gap-4'>
      <div className='bg-Card mx-3 my-3 rounded-md flex flex-row justify-around items-center gap-2'>
        <Image src='/images/profiles/alif.jpg' alt='' width={100} height={100} className='rounded-md' />
        <h1 className='text-3xl text-white font-Space'>Alif</h1>
      </div>
      <div className='bg-Card mx-3 my-3 rounded-md flex flex-row justify-around items-center gap-2'>
        <Image src='/images/profiles/prerana.PNG' alt='' width={100} height={100} className='rounded-md' />
        <h1 className='text-3xl text-white font-Space'>Prerana</h1>
      </div>
      <div className='bg-Card   mx-3 my-3 ounded-md flex flex-row justify-around items-center gap-2'>
        <Image src='/images/profiles/prerana.PNG' alt='' width={100} height={100} className='rounded-md' />
        <h1 className='text-3xl text-white font-Space'>ph</h1>
      </div>
      <div className='bg-Card mx-3 my-3 rounded-md flex flex-row justify-around items-center gap-2'>
        <Image src='/images/profiles/prerana.PNG' alt='' width={100} height={100} className='rounded-md' />
        <h1 className='text-3xl text-white font-Space'>ph</h1>
      </div>
      <div className='bg-Card mx-3 my-3 rounded-md flex flex-row justify-around items-center gap-2'>
        <Image src='/images/profiles/prerana.PNG' alt='' width={100} height={100} className='rounded-md' />
        <h1 className='text-3xl text-white font-Space'>ph</h1>
      </div>
    </div>
  )
}

export default BidderSection
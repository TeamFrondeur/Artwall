import React from 'react'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import Image from 'next/image';

const BidHistorySection = () => {

  const [dataResponse, setDataResponse] = useState();
  const router = useRouter();
  const { artname } = router.query;
  useEffect(() => {
    async function getBidHistory() {
      const response = await fetch('/api/getbidhistory', {
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
    // getBidHistory();
  }, [router.query.artname, router.isReady]);



  return (
    <div className='bg-[#3e475e] w-[15rem] flex flex-col gap-4'>
      <div className='bg-Card mx-3 my-3 rounded-md flex flex-row justify-around items-center gap-2'>
        <Image src='/images/profiles/alif.jpg' alt='' width={100} height={100} className='rounded-md' />
        <h1 className='text-3xl text-white font-Space'>2000000</h1>
      </div>
      <div className='bg-Card rounded-md mx-3 my-3  flex flex-row justify-around items-center gap-2'>
        <Image src='/images/profiles/prerana.PNG' alt='' width={100} height={100} className='rounded-md' />
        <h1 className='text-3xl text-white font-Space'>100000</h1>
      </div>
      <div className='bg-Card rounded-md mx-3 my-3 flex flex-row justify-around items-center gap-2'>
        <Image src='/images/profiles/prerana.PNG' alt='' width={100} height={100} className='rounded-md' />
        <h1 className='text-3xl text-white font-Space'>ph</h1>
      </div>
      <div className='bg-Card rounded-md mx-3 my-3 flex flex-row justify-around items-center gap-2'>
        <Image src='/images/profiles/prerana.PNG' alt='' width={100} height={100} className='rounded-md' />
        <h1 className='text-3xl text-white font-Space'>ph</h1>
      </div>
      <div className='bg-Card rounded-md mx-3 my-3 flex flex-row justify-around items-center gap-2'>
        <Image src='/images/profiles/prerana.PNG' alt='' width={100} height={100} className='rounded-md' />
        <h1 className='text-3xl text-white font-Space'>ph</h1>
      </div>
    </div>
  )
}

export default BidHistorySection
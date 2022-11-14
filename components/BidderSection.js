import React from 'react'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router';

const BidderSection = () => {

  const [dataResponse, setDataResponse] = useState();
  const router = useRouter();
  const { artname } = router.query;
  useEffect(() => {
    async function getBiddersData() {
        const response = await fetch('/api/getprofile', {
            method: 'POST',
            body: JSON.stringify({artName: artname}),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const res = await response.json();
        setDataResponse(res.results);
        // console.log(dataResponse);
      
    }
    getBiddersData();
},[router.query.artname, router.isReady]);

  

  return (
    <div className='bg-Card w-24 flex flex-col gap-4'>
        
    </div>
  )
}

export default BidderSection
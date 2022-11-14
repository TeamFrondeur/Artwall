import React from 'react'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import BidderSection from '../../components/BidderSection';
import BidSection from '../../components/BidSection';
import BidHistorySection from '../../components/BidHistorySection';
const Biddings = () => {
    const router = useRouter();
    const { artname } = router.query;
    const [dataResponse, setDataResponse] = useState([]);
    const [biddingResponse, setBiddingResponse] = useState([]);
    
    // useEffect(() => {
    //     async function getBiddingData() {
    //         const response = await fetch('/api/getbiddingdata', {
    //             method: 'POST',
    //             body: JSON.stringify({artname: artname}),
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //         });

    //         const res = await response.json();
    //         setDataResponse(res.results);
    //     }
    //     getBiddingData();
    // },[router.query.artname, router.isReady]);

    return (
    <div className='bg-Main flex flex-row justify-around items-center'>
        <BidderSection />
        <BidSection />
        <BidHistorySection />
    </div>
  )
}

export default Biddings
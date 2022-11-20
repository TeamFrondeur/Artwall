import React from 'react'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import BidderCard from '../../components/BidderCard';
import BidSection from '../../components/BidSection';
import BidHistorySection from '../../components/BidHistorySection';
const Biddings = () => {
    const router = useRouter();
    const { artname } = router.query;
    // const [dataResponse, setDataResponse] = useState([]);
    const [bidCardData, setBidCardData] = useState([]);
    const [bidderList, setBidderList] = useState([]);
    
    useEffect(() => {
      getBiddersData();
      getBidCardData();
    }, [router.query.artname, router.isReady])

    async function getBiddersData() {
      const response = await fetch('/api/getbidders', {
        method: 'POST',
        body: JSON.stringify({ bidArt: artname }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const res = await response.json();
      setBidderList(res.results);
      console.log(bidderList);
    }
    
    async function getBidCardData() {
      const response = await fetch('/api/getbidcard', {
        method: 'POST',
        body: JSON.stringify({ bidArt: artname }),
        headers: {
          'Content-Type': 'application/json',
        }
      });

      const res = await response.json();
      setBidCardData(res.results);
      console.log(bidCardData);
    }

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
    <div className='bg-Main flex flex-row justify-around'>
      <div className='bg-Card w-[20rem] flex flex-col gap-4 rounded-[1rem]'>
        {bidderList.map((bidder) => {
          return (
            <div key={bidder.idBIDS}>
              <BidderCard image={bidder.imagePath} name={bidder.bidderName} />
            </div>
          )
        })}
      </div>
      <BidSection cardData={bidCardData}/>
      <BidHistorySection />
    </div>
  )
}

export default Biddings
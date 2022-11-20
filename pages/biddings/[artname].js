import React from 'react'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import BidderCard from '../../components/BidderCard';
import BidSection from '../../components/BidSection';
import BidHistorySection from '../../components/BidHistorySection';
import BidHistoryCard from '../../components/BidHistoryCard';
import io from 'socket.io-client';

let socket;


const Biddings = () => {
    const router = useRouter();
    const { artname } = router.query;
    // const [dataResponse, setDataResponse] = useState([]);
    const [bidCardData, setBidCardData] = useState([]);
    const [bidderList, setBidderList] = useState([]);
    const [history, setHistory] = useState([]);
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
      getBiddersData();
      getBidCardData();
      getBidHistoryData();
      socketInitializer();
    }, [router.query.artname, router.isReady])

    useEffect(() => {
      getBiddersData();
      getBidCardData();
      getBidHistoryData();
    },[refresh])

    useEffect(() => {
      socketInitializer();
    })
    

    const socketInitializer = async () => {
      await fetch('/api/socket');
      socket = io()
  
      socket.on('connect', () => {
        console.log('connected')
      })
  
      socket.on('update-bid', amount => {
        setRefresh(!refresh);
      })
    }

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

    async function getBidHistoryData() {
      const response = await fetch('/api/getbidhistory', {
        method: 'POST',
        body: JSON.stringify({ bidArt: artname }),
        headers: {
          'Content-Type': 'application/json',
        }
      });

      const res = await response.json();
      setHistory(res.results);
      console.log(history);
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
      <div className='bg-Card h-[48rem] w-[20rem] overflow-y-auto scroll whitespace-nowrap scroll-smooth flex flex-col gap-4 rounded-[1rem]'>
        {bidderList.map((bidder) => {
          return (
            <div key={bidder.idBIDS}>
              <BidderCard image={bidder.imagePath} name={bidder.bidderName} />
            </div>
          )
        })}
      </div>
      <BidSection cardData={bidCardData}/>
      <div className='bg-Card h-[48rem] w-[20rem] flex flex-col gap-4 rounded-[1rem] overflow-y-auto scroll whitespace-nowrap scroll-smooth'>
        {history.map((item) => {
          return (
            <div key={item.idBIDS}>
              <BidHistoryCard image={item.imagePath} amount={item.bidAmount} />
            </div>
          )
        })}
      </div>
      {/* <BidHistorySection /> */}
    </div>
  )
}

export default Biddings
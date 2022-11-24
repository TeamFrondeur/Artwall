import React from 'react'
import Image from 'next/image'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const BidItemCard = ({data}) => {

  const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();
  const [maxBidder, setMaxBidder] = useState();
  let interval;

  useEffect(() => {
    startTimer();
  });


  // const [dataResponse, setDataResponse] = useState([]);
  // const router = useRouter();
  // const { artname } = router.query;
  // console.log(artname);

  
  async function getMaxBidder() {
    const response = await fetch('/api/getmaxbidder', {
      method: 'POST',
      body: JSON.stringify({ bidArt: artname }),
      headers: {
        'Content-Type': 'application/json',
      }
    });

    const res = await response.json();
    setMaxBidder(res.results);
    console.log(maxBidder);
  }

  // useEffect(() => {
    // async function getBidCard() {
    //   const response = await fetch('/api/getbidcard', {
    //     method: 'POST',
    //     body: JSON.stringify({ bidArt: artname }),
    //     headers: {
    //       'Content-Type': 'application/json',
    //     }
    //   });

    //   const res = await response.json();
    //   setDataResponse(res.results);
    //   console.log(dataResponse);
    // }

  //   getBidCard();

  // }, [router.query.artname, router.isReady])

  const startTimer = () => {
    interval = setInterval(() => {
      const date1 = new Date();
      const date2 = new Date(date1.toISOString());
      const date3 = new Date(data.endDate);
      const distance = date3 - date2;
      console.log(distance);
      const days = Math.floor(distance / (24 * 60 * 60 * 1000));
      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      const seconds = Math.floor((distance % (60 * 1000)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
        if (localStorage.getItem('user') === maxBidder.bidderName)
         alert("Congratulations!");
        else alert("Bid ended!");
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    });
  };


  return (
    <div className='bg-Card h-[29rem] w-[22rem] rounded-md flex flex-col font-Space'>
      <Image src={`/images/arts/${data.artPath}`} className='rounded-lg self-center my-6' alt='' width='200' height='100' />
      <div className='flex flex-row justify-between px-6'>
        <h1 className='text-lg text-white'>{data.artName}</h1>
        <Image src={`/images/profiles/${data.imagePath}`} width='45' height='45' className='rounded-full' alt='' />
      </div>
      <div className='flex flex-row py-2 px-2 justify-around'>
        <ul className='flex flex-col items-center'>
          <li>
            <h2 className='text-gray-500 text-lg'>Current Bid</h2>
          </li>
          <li>
            <h3 className='text-white text-md'>{data.currentBid} BDT</h3>
          </li>
        </ul>
        <ul className='flex flex-col items-center'>
          <li>
            <h2 className='text-gray-500 text-lg'>Bidders</h2>
          </li>
          <li>
            <h3 className='text-white text-md'>{data.numBidders}</h3>
          </li>
        </ul>
        <ul className='flex flex-col items-center'>
          <li>
            <h2 className='text-gray-500 text-lg'>Ending In</h2>
          </li>
          <li>
            <h3 className="text-white text-md">
              {timerDays}d {timerHours}h {timerMinutes}m {timerSeconds}s
            </h3>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default BidItemCard
import React, { useEffect, useState } from 'react'
import BidItemCard from './BidItemCard'
import io from 'socket.io-client'
import { useRouter } from 'next/router';

let socket;

const BidSection = ({cardData}) => {

  const router = useRouter();
  const [bid, setBid] = useState();
  // const [curBid, setCurBid] = useState(null);
  const [bidStatus, setBidStatus] = useState();

  useEffect(() => {
    socketInitializer();
  }, [])


  console.log("bid:" + bid);

  const socketInitializer = async () => {
    await fetch('/api/socket');
    socket = io()

    socket.on('connect', () => {
      console.log('connected')
    })

    socket.on('update-bid', amount => {
      setBid(amount)
    })
  }

  async function addBid() {
    const response = await fetch('/api/addbid', {
      method: 'POST',
      body: JSON.stringify({ bidArt: cardData.artName, bidderName: localStorage.getItem('user'), bidAmount: bid }),
      headers: {
        'Content-Type': 'application/json',
      }
    });

    const res = await response.json();
    setBidStatus(res.results);
    console.log("Bid Status: ", bidStatus);
  }

  const onClickHandler = () => {
    if (localStorage.getItem('user')) {
      if (bid <= cardData.currentBid)
        alert("Please input a greater value than the current bid!")
      else {
        addBid();
        socket.emit('new-bid', bid);
      } 
    }
    else {
      alert("Must login first!");
      router.push('/login');
    }

  }

  return (
    <div className='flex flex-col justify-between'>
      <div className='bg-Card flex flex-col rounded-md'>
        <div>
          <BidItemCard data={cardData}/>
        </div>
      </div>
      <div className='bg-Card h-[15rem] my-10 flex flex-col justify-center gap-5 items-center rounded-md'>
          <h1 className='text-3xl font-Space text-white'>Enter Bid!</h1>
          <input type={'number'} placeholder={cardData.currentBid + 1} min={cardData.currentBid + 1} className='sm form-input rounded-md' onChange={(e) => setBid(e.target.value)} />
          <button className='btn border-primary border-2 text-white font-Space' onClick={onClickHandler}>Submit</button>
      </div>
    </div>
  )
}

export default BidSection
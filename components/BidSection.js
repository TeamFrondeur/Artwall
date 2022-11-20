import React, { useEffect, useState } from 'react'
import BidItemCard from './BidItemCard'
import io from 'socket.io-client'
let socket;

const BidSection = ({cardData}) => {

  const [bid, setBid] = useState();
  const [curBid, setCurBid] = useState(null);

  useEffect(() => {
    socketInitializer();
  }, [])

  useEffect(() => {
    
  }, [])
  

  console.log("bid:" + bid);

  const socketInitializer = async () => {
    await fetch('/api/socket');
    socket = io()

    socket.on('connect', () => {
      console.log('connected')
    })

    socket.on('update-bid', amount => {
      setCurBid(amount)
    })
  }

  const onClickHandler = () => {
    socket.emit('new-bid', bid);
  }

  return (
    <div className='flex flex-col justify-between'>
      <div className='bg-Card flex flex-col rounded-md'>
        <div>
          <BidItemCard data={cardData} bid={curBid}/>
        </div>
      </div>
      <div className='bg-Card h-[15rem] my-10 flex flex-col justify-center gap-5 items-center rounded-md'>
          <h1 className='text-3xl font-Space text-white'>Enter Bid !</h1>
          <input type={'number'} placeholder="Input New Bid" min={(curBid != null) ? curBid : cardData.currentBid} className='sm form-input rounded-md' onChange={(e) => setBid(e.target.value)} />
          <button className='btn border-primary border-2 text-white font-Space' onClick={onClickHandler}>Submit</button>
      </div>
    </div>
  )
}

export default BidSection
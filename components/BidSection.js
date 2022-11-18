import React, { useEffect, useState } from 'react'
import BidCard from './BidCard'
import io from 'socket.io-client'
let socket;

const BidSection = () => {

  const [bid, setBid] = useState();

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

    socket.on('update-input', msg => {
      setInput(msg)
    })
  }

  const onClickHandler = () => {
    setInput(e.target.value)
    socket.emit('input-change', e.target.value)
  }

  return (
    <div className='bg-Card flex flex-col'>
      <div>
        <BidCard />
      </div>
      <div className='my-10 flex flex-col justify-center gap-5 items-center'>
        <input type={'number'} placeholder="Input New Bid" className='sm form-input rounded-md' onChange={(e) => setBid(e.target.value)} />
        <button className='btn border-primary border-2 text-white font-Space' onClick={onClickHandler}>Submit</button>
      </div>
    </div>
  )
}

export default BidSection
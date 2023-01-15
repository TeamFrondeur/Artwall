import React, {useState, useEffect} from 'react'
import UploadModal from '../components/UploadModal'
import { io } from 'socket.io-client'

let socket;

const test2 = () => {

  const [input, setInput] = useState('');

  console.log("Input: " + input);
  useEffect(() => {
    socketInitializer();
  }, [])

  const socketInitializer = async () => {
    await fetch('/api/socket');
    socket = io()

    socket.on('connect', () => {
      console.log('connected')
    })

    socket.on('update-input', msg => {
      console.log('Update: ' + msg)
      setInput(msg)
    })
    
  }
   
  

  const onChangeHandler = (e) => {
    setInput(e.target.value);
    socket.emit('input-change', e.target.value);
  }

  return (
    <div className='bg-Main flex justify-center justify-items-center'>
        {/* <UploadModal /> */}
        <div className=' bg-Card w-64 flex justify-center text-black'>
          {/* <h1 className='text-white'>sss</h1> */}
          <input placeholder='Type Something' value={input} onChange={onChangeHandler} />  
        </div>
    </div>
  )
}

export default test2
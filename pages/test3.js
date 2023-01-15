import React, {useState, useEffect} from 'react'
import UploadModal from '../components/UploadModal'
import { io } from 'socket.io-client'

let socket;

const test3 = () => {

  const [flag, setFlag] = useState(true);

//   console.log("Input: " + input);
  useEffect(() => {
    console.log("Hello There!");
  }, [flag])



  return (
    <div className='bg-Main flex justify-center justify-items-center'>
       <button onClick={() => {
            if (flag)
                setFlag(false);
            else setFlag(true);
            // setFlag(true);
       }}>Click Me</button>
    </div>
  )
}

export default test3
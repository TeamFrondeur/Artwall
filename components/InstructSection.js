import Link from 'next/link'
import React from 'react'
import { useState } from 'react'
import UploadModal from './UploadModal';
import { useRouter } from 'next/router';

const InstructSection = () => {

  const [modalOn, setModalOn] = useState();
  const router = useRouter();

  return (
    <div className='flex flex-col'>
        <div className='flex flex-col self-center items-center font-Space text-white gap-3'>
            <h2 className='text-2xl'>Market Your Digital Art</h2>
            <h1 className='text-3xl'>Showcase &amp; Sell Your</h1>
        </div>
        <div className='flex flex-row py-10 font-Space text-white gap-3'>
            <div className='bg-Card h-80 w-80 rounded-md flex flex-col justify-center items-center gap-3'>
                <h1 className='text-lg'>Create Artwork</h1>
                <h3 className='text-md text-center px-2'>
                    Create your collection, Add social links, profile &amp; banner images and set a sales fee
                </h3>
            </div>
            <div className='bg-Card h-80 w-80 rounded-md flex flex-col justify-center items-center gap-3'>
                <h1 className='text-lg'>Upload</h1>
                <h3 className='text-md text-center px-2'>
                    Upload your work, group multiple artworks together to form collections
                </h3>
            </div>
            <div className='bg-Card h-80 w-80 rounded-md flex flex-col justify-center items-center gap-3'>
                <h1 className='text-lg'>Listing</h1>
                <h3 className='text-md text-center px-2'>
                    Setup and choose between auction, fixed-price listing and declining-price listings
                </h3>
            </div>
        </div>
        <div className='flex flex-row justify-center gap-10'>
            <button className='rounded-lg py-2 px-3 text-xl font-bold cursor-pointer tracking-wider border-primary border-2 text-white' 
                onClick={() => {
                    if (localStorage.getItem('user')){
                        setModalOn(true);
                    }
                    else router.push('/login');
                }}>
                Upload Now
            </button>
            <div className='self-center'>
                {modalOn && <UploadModal setModalOn={setModalOn}/>}
            </div>
            <Link href='/dummy'>
                <button className='rounded-lg py-2 px-3 text-xl font-bold cursor-pointer tracking-wider border-primary border-2 text-white'>Watch Video</button>
            </Link>
        </div>
    </div>
  )
}

export default InstructSection
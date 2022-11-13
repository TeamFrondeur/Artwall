import React, { useState } from 'react'
import Image from 'next/image'

const UploadModal = () => {

    const [artName, setArtname] = useState();
    const [genre, setGenre] = useState();
    const [startingBid, setStartingBid] = useState();
    const [endingDate, setEndingDate] = useState();
    

    console.log(artName)
    console.log(genre)
    console.log(startingBid)
    console.log(endingDate)

    var uploaded = false;

  return (
    <div className='bg-black bg-opacity-50 absolute inset-0 flex justify-center items-center'>
        <div className='bg-Card h-[30rem] w-[60rem] flex flex-row justify-items-center rounded-lg'>
            <div className='flex flex-col justify-center items-center w-[20rem] gap-[4rem]'>
                {uploaded ? 
                    <Image src={`/images/arts/`} alt='' /> 
                : 
                <button className='rounded-lg py-2 px-3 text-xl font-bold cursor-pointer tracking-wider text-white'>
                    <Image src='/images/icons/upload-100.png' width={100} height={100} alt=''/>
                </button>}
            </div>
            <div className='bg-White border-x-[0.01rem] my-10'></div>
            <div className='grid gap-4 my-10 mx-10 justify-center items-center font-Space text-white'>
                <div className='flex flex-row gap-4'>
                    <h1 className='text-2xl'>Artname </h1>
                    <input type={'text'} className='sm form-input rounded-md' placeholder='Artname'
                        onChange={({target}) => setArtname(target?.value)}/>
                </div>

                <div className='flex flex-row gap-4'>
                    <h1 className='text-2xl'>Genre </h1>
                    <input type={'text'} className='sm form-input rounded-md' placeholder='Genre'
                        onChange={({target}) => setGenre(target?.value)}/>
                </div>

                <div className='flex flex-row gap-4'>
                    <h1 className='text-2xl'>Initial Bid </h1>
                    <input type={'text'} className='sm form-input rounded-md' placeholder='Initial Bid'
                        onChange={({target}) => setStartingBid(target?.value)}/>
                </div>

                <div className='flex flex-row gap-4'>
                    <h1 className='text-2xl'>Ending Date </h1>
                    <input type={'datetime-local'} className='sm form-input rounded-md text-[#6B7280]'
                        onChange={({target}) => setEndingDate(target?.value)}/>
                </div>
                <div className='flex justify-center'>
                    <button className='btn border-primary border-2 text-white font-Space'>
                        Submit
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UploadModal
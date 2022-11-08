import React from 'react'
import Image from 'next/image'

const ProfileCard = ({image, name}) => {
  return (
    <div className='bg-Card h-[29rem] w-[20rem]'>
        <div className='flex flex-col justify-center items-center font-Space text-white'>
            <Image src='/images/prerana.PNG' width='150' height='150' className='rounded-full py-2'/>
            <h1 className='text-xl py-3'>{name}</h1>
        </div>
    </div>
  )
}

export default ProfileCard
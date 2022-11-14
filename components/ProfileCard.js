import React from 'react'
import Image from 'next/image'

const ProfileCard = ({ image, name }) => {
  return (
    <div className='bg-Card h-[29rem] w-[20rem]'>
      <div className='flex flex-col justify-center items-center  font-Space text-white'>
        <Image src={`/images/profiles/prerana.PNG`} width='150' height='150' className='rounded-full py-2' alt='' />
        <h1 className='text-xl py-3'>{name}</h1>
        <button className='rounded-lg py-2 px-3 text-xl font-bold cursor-pointer tracking-wider border-primary border-2 text-white'
          onClick={() => {
            if (localStorage.getItem('user')) {
              setModalOn(true);
            }
            else {
              alert("Must login first!");
              router.push('/login');
            }
          }}>
          Upload Now
        </button>
        <div className='self-center'>
          {modalOn && <UploadModal setModalOn={setModalOn} />}
        </div>
      </div>
    </div>
  )
}

export default ProfileCard
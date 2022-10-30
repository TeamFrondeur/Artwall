import React from 'react'
import ArtCard from './ArtCard'
import Link from 'next/link'

const TopSection = () => {
  return (
    <div className='flex flex-row gap-10 my-5 items-between'>
      <ul className='flex flex-col gap-5 text-white font-Space'>
        <li>
          <h1 className='text-3xl font-normal'>
            Discover, Collect and Bid for your favorite arts!  
          </h1>
        </li>
        <li className='my-5'>
          <h3 className='text-xl font-normal'>
            Digital Marketplace for your favorite art!
          </h3>
        </li>
        <li className='self-center my-[3.5rem]'>
          <Link href='/marketplace'>
            <button className='rounded-full py-2 px-3 text-xl font-bold cursor-pointer tracking-wider border-primary border-2'>Discover Now</button>
          </Link>
        </li>
        <li>
          <div className='flex flex-row justify-evenly my-[1rem]'>
            <ul>
              <li>
                <h1 className='text-3xl'>35k+</h1>
              </li>
              <li>
                <h2 className='text-2xl'>Artworks</h2>
              </li>
            </ul>
            <ul>
              <li>
                <h1 className='text-3xl'>15k+</h1>
              </li>
              <li>
                <h2 className='text-2xl'>Auctions</h2>
              </li>
            </ul>
            <ul>
              <li>
                <h1 className='text-3xl'>25k+</h1>
              </li>
              <li>
                <h2 className='text-2xl'>Artists</h2>
              </li>
            </ul>
          </div>
        </li>
      </ul>
      <ArtCard />
    </div>
  )
}

export default TopSection
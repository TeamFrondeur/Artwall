import React, { useEffect, useState } from 'react'
import HotArtCard from './HotArtCard';

const HotSection = () => {

  const [dataResponse, setDataResponse] = useState([]);
  const [genre, setGenre] = useState('Flora');

  useEffect(() => {
    async function getPageData() {
        const response = await fetch('api/gethotdata', {
          method: 'POST',
          body: JSON.stringify({genre: genre}),
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const res = await response.json();
        console.log(res.results);
        setDataResponse(res.results);
    }
    getPageData();
  }, [genre])
  
  return (
    <div className='flex flex-col'>
        <div className='self-center font-Space text-white flex flex-col gap-3 items-center'>
            <h2 className='text-2xl'>Digital Art Marketplace</h2>
            <h1 className='text-3xl'>Super Hot Drops</h1>
        </div>
        <div className='flex flex-row justify-evenly my-[5rem] gap-10'>
            <button className='rounded-lg w-[10rem] py-2 px-3 text-xl font-bold cursor-pointer tracking-wider border-primary border-2 text-white'
              onClick={() => setGenre('Flora')}>
              Flora
            </button>
            <button className='rounded-lg w-[10rem] py-2 px-3 text-xl font-bold cursor-pointer tracking-wider border-primary border-2 text-white'
              onClick={() => setGenre('Nature')}>
                Nature
            </button>
            <button className='rounded-lg w-[10rem] py-2 px-3 text-xl font-bold cursor-pointer tracking-wider border-primary border-2 text-white'
              onClick={() => setGenre('Misc')}>
                Misc
            </button>
            <button className='rounded-lg w-[10rem] py-2 px-3 text-xl font-bold cursor-pointer tracking-wider border-primary border-2 text-white'
              onClick={() => setGenre('Life')}>
                Life
            </button>
            <button className='rounded-lg w-[10rem] py-2 px-3 text-l font-bold cursor-pointer tracking-wider border-primary border-2 text-white'>More</button>
        </div>
        <div className='grid grid-cols-3 gap-5'>
          {dataResponse.map((result) => {
            return (
              <div key={result.idART}> 
                <HotArtCard 
                  image={result.artPath} 
                  artname={result.artName} 
                  artist={result.imagePath} 
                  bid={result.currentBid} 
                  bidders={result.numBidders}
                />
              </div>
            )
          })}
        </div>
    </div>
    
  )
}

export default HotSection
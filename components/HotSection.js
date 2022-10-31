import React, { useEffect, useState } from 'react'
import MiniArtCard from './MiniArtCard';

const HotSection = () => {

  const [dataResponse, setDataResponse] = useState([]);

  useEffect(() => {
    async function getPageData() {
        const apiUrlEndpoint = `http://localhost:3000/api/getdata`;
        const response = await fetch(apiUrlEndpoint);
        const res = await response.json();
        console.log(res.results);
        setDataResponse(res.results);
    }
    getPageData();
  }, [])
  
  return (
    <div className='flex flex-col'>
        <div className='self-center font-Space text-white flex flex-col gap-3 items-center'>
            <h2 className='text-2xl'>Digital Art Marketplace</h2>
            <h1 className='text-3xl'>Super Hot Drops</h1>
        </div>
        <div className='flex flex-row justify-evenly my-[5rem] gap-10'>
            <button className='rounded-lg py-2 px-3 text-xl font-bold cursor-pointer tracking-wider border-primary border-2 text-white'>Music</button>
            <button className='rounded-lg py-2 px-3 text-xl font-bold cursor-pointer tracking-wider border-primary border-2 text-white'>Art</button>
            <button className='rounded-lg py-2 px-3 text-xl font-bold cursor-pointer tracking-wider border-primary border-2 text-white'>Photography</button>
            <button className='rounded-lg py-2 px-3 text-xl font-bold cursor-pointer tracking-wider border-primary border-2 text-white'>Videos</button>
            <button className='rounded-lg py-2 px-3 text-l font-bold cursor-pointer tracking-wider border-primary border-2 text-white'>More</button>
        </div>
        <div className='grid grid-cols-3'>
          {dataResponse.map((results) => {
            return (
              <div key={results.idART}> 
                <MiniArtCard 
                  image={results.art} 
                  artname={results.name} 
                  artist={results.name} 
                  bid={results.bid} 
                  bidders={results.bidders} 
                  timer={results.timer}
                />
              </div>
            )
          })}
        </div>
    </div>
    
  )
}

export default HotSection
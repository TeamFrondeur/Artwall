import Head from 'next/head'
import Image from 'next/image'
import ArtCard from '../components/ArtCard'
import ArtistSection from '../components/ArtistSection'
import HotSection from '../components/HotSection'
import InstructSection from '../components/InstructSection'
import TopSection from '../components/TopSection'
import styles from '../styles/Home.module.css'

export default function Home({ data }) {
  return (
    <>
      <div className='bg-Main flex justify-center'>
        <TopSection />
      </div>
      <div className='bg-Main flex justify-center py-20'>
        <HotSection data={data} />
      </div>
      <div className='bg-Main flex justify-center py-20'>
        <InstructSection />
      </div>
      {/* <div className='bg-Main flex justify-center py-20'>
        <ArtistSection />
      </div> */}
    </>
  )
}


// export async function getServerSideProps() {
//   const res = await fetch(`http://localhost:3000/api/gethotdata`);
//   const data = await res.json();
//   console.log(data);
//   return { props: {data} }
// }
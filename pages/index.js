import Head from 'next/head'
import Image from 'next/image'
import ArtCard from '../components/ArtCard'
import HotSection from '../components/HotSection'
import TopSection from '../components/TopSection'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <div className='bg-Main flex justify-center'>
        <TopSection />
      </div>
      <div className='bg-Main flex justify-center py-20'>
        <HotSection />
      </div>
    </>
  )
}

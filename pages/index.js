import Head from 'next/head'
import Image from 'next/image'
import ArtCard from '../components/ArtCard'
import LandingSection from '../components/LandingSection'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className='bg-Main h-screen flex justify-center'>
      <LandingSection />
    </div>
     
  )
}

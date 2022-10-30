import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-Main font-Space py-5'>
        <div className='flex flex-row gap-4 px-2 py-2 justify-around'>
            <ul className='flex flex-col text-white gap-2'>
                <li>
                    <h1 className='text-xl font-bold'>Artwall</h1>
                </li>
                <li className='my-1'>
                    <h2 className='text-lg font-normal'>Digital art marketplace. Authentic and Unique digital collection.</h2>
                </li>
                <li>Social Media Icons placeholder</li>
            </ul>
            <ul className='flex flex-col text-white gap-1 items-center'>
                <li>
                    <Link href="/marketplace" className='text-xl font-bold'>
                        Marketplace
                    </Link>
                </li>
                <li>
                    <Link href="/explore" className='text-lg font-normal'>
                        Explore
                    </Link>
                </li>
                <li>
                    <Link href="/artists" className='text-lg font-normal'>
                        Artists
                    </Link>
                </li>
                <li>
                    <Link href='/collections' className='text-lg font-normal'>
                        Collections    
                    </Link>
                </li>
            </ul>
            <ul className='flex flex-col text-white gap-1 items-center'>
                <li>
                    <h1 className='text-xl font-bold'>
                        Resources
                    </h1>
                </li>
                <li>
                    <Link href='/help' className='text-lg font-normal'>
                        Help Center
                    </Link>
                </li>
                <li>
                    <Link href='/partners' className='text-lg font-normal'>
                        Partners
                    </Link>
                </li>
                <li>
                    <Link href='/blogs' className='text-lg font-normal'>
                        Blogs
                    </Link>
                </li>
                <li>
                    <Link href='/newsletter' className='text-lg font-normal'>
                        Newsletter
                    </Link>
                </li>
            </ul>
            <ul className='flex flex-col text-white gap-1 items-center'>
                <li>
                    <h1 className='text-xl font-bold'>
                        Company
                    </h1>
                </li>
                <li>
                    <Link href='/about' className='text-lg font-normal'>
                        About Us
                    </Link>
                </li>
                <li>
                    <Link href='/careers' className='text-lg font-normal'>
                        Careers
                    </Link>
                </li>
            </ul>
        </div>
        <div className='flex flex-row justify-between py-2 mx-10'>
            <h3 className='text-md text-gray-500 font-normal'>
                Copyright 2022 Artwall, All Rights Reserved.
            </h3>
            <Link href='/privacy' className='text-md text-gray-500 font-normal'>
                Privacy Policy
            </Link>
            <Link href='/terms' className='text-md text-gray-500 font-normal'>
                Terms &amp; Conditions
            </Link>
        </div>
    </footer>
  )
}

export default Footer
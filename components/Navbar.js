import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="bg-Main flex flex-row px-16 py-2 font-Space justify-between">
        <Link className="text-fuchsia-500 text-xl" href="/">Artwall</Link>
        <ul className='flex text-white flex-row basis-6 gap-4 justify-around'>
            <li>
                <Link href="/explore">Explore</Link>                    
            </li>
            <li>
                <Link href="/marketplace">Marketplace</Link>
            </li>
            <li>
                <Link href="/artists">Artists</Link>
            </li>
            <li>
                <Link href='/collections'>Collections</Link>
            </li>
            <li>
                <form>
                    <input type="search" className="form-input px-4 py-0 rounded-full" placeholder="Search" />
                </form>
            </li>
            <li>
                <Link href="/registration">
                    <button className="btn border-primary border-2 rounded-md">
                        Signup
                    </button>
                </Link>
                
            </li>
        </ul>
    </nav>
  )
}

export default Navbar
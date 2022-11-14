import React from 'react'
import Link from 'next/link'
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

const Navbar = () => {
    const router = useRouter();
    const [user, setUser] = useState();
    const [drop, setDrop] = useState(false);
    const [dataResponse, setDataResponse] = useState();
    useEffect(() => {
        setUser(localStorage.getItem('user'));

        // async function getNavData() {
        //     const response = await fetch('api/getnavdata', {
        //       method: 'POST',
        //       body: JSON.stringify({userName: user}),
        //       headers: {
        //         'Content-Type': 'application/json'
        //       }
        //     });
        //     const res = await response.json();
        //     console.log(res.results);
        //     setDataResponse(res.results);
        // }
        // getNavData();

    }, [])

    console.log("Logged In: " + user);

    const handleSignOut = () => {
        setUser("");
        localStorage.clear();
        alert("Logged Out!");
        router.push('/');
    }

    return (
        <nav className="bg-Main flex flex-row px-16 py-2 font-Space justify-between">
            <Link className="text-fuchsia-500 text-xl" href="/">
                <Image src='/images/icons/artwall.png' alt='' height={150} width={150} />
            </Link>
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
                    {user ?
                        <div className='relative'>
                            <button className='btn border-primary border-2' onClick={() => setDrop(!drop)}>
                                Profile{/* <Image src={`/images/profiles/${dataResponse.imagePath}`} alt='' width={100} height={100} className='rounded-lg self-center'/> */}
                            </button>
                            {drop &&
                                <div className='absolute right-0 w-[8rem] bg-Card  rounded-lg flex flex-col items-center'>
                                    <ul>
                                        <li>
                                            <Link href={`/profiles/${user}`}>
                                                <button className="btn block hover:bg-[#3e475e]">Go To Profile</button>
                                            </Link>
                                        </li>
                                        <li>
                                            <button className="btn block hover:bg-[#3e475e]" onClick={handleSignOut}>Sign Out</button>
                                        </li>
                                    </ul>
                                </div>
                            }

                        </div>

                        // <Link href={`/profiles/${user}`}>

                        // </Link>

                        :
                        <Link href="/login">
                            <button className="btn border-primary border-2 rounded-md">
                                Login
                            </button>
                        </Link>
                    }
                    {/* <Link href="/login">
                        <button className="btn border-primary border-2 rounded-md">
                            Login
                        </button>
                </Link> */}
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
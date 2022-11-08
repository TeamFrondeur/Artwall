import React, { useState } from 'react'
import Link from 'next/link'

const LoginForm = () => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const postData = async (event) => {
        event.preventDefault();

        const response = await fetch('/api/loginuser', {
            method: 'POST',
            body: JSON.stringify( {username: username, password: password}),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const data = await response.json();
        console.log(data.results);
    }

    return (

    <div className='bg-Card rounded-md h-{24.5rem} w-96'>
        <div className='grid grid-cols-0.5 gap-4 justify-items-center my-10'>
            <h3 className='font-Space text-3xl text-white'>Login</h3>
            <div className='flex flex-col justify-items-center gap-4 py-4'>
                <input type={'text'} className='sm form-input rounded-md' placeholder='Username'
                    onChange={({target}) => setUsername(target?.value)}/>

                <input type={'password'} className='sm form-input rounded-md' placeholder='Password'
                    onChange={({target}) => setPassword(target?.value)}/>
            </div>
            <button className='btn border-primary border-2 text-white font-Space' onClick={postData}>
                    Submit
            </button>
            <Link className="font-Space text-white text-sm py-5" href={'/registration'}>
                Don&apos;t have an account? Register here.
            </Link>
        </div>
    </div>

    )
}

export default LoginForm
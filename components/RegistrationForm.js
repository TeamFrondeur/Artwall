import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';
const RegisterForm = () => {
    const router = useRouter();
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirm, setConfirm] = useState();

    const postData = async (event) => {
        // event.preventDefault();

        const response = await fetch('/api/registeruser', {
            method: 'POST',
            body: JSON.stringify({ username: username, email: email, password: password }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const data = await response.json();
        console.log(data.results);
    }

    console.log('Username: ', username);
    console.log('E-mail: ', email);
    console.log('Password: ', password);

    return (

        <div className='bg-Card rounded-md h-{24.5rem} w-96'>
            <div className='grid grid-cols-0.5 gap-4 justify-items-center my-10'>
                <h3 className='font-Space text-3xl text-white'>Register</h3>
                <input type={'text'} className='sm form-input rounded-md' placeholder='Username'
                    onChange={({ target }) => setUsername(target?.value)} />

                <input type={'email'} className='sm form-input rounded-md' placeholder='E-mail'
                    onChange={({ target }) => setEmail(target?.value)} />

                <input type={'password'} className='sm form-input rounded-md' placeholder='Password'
                    onChange={({ target }) => setPassword(target?.value)} />

                <input type={'password'} className='sm form-input rounded-md' placeholder='Confirm Password'
                    onChange={({ target }) => setConfirm(target?.value)} />

                <button className='btn border-primary border-2 text-white font-Space' onClick={({ target }) => {

                    const mail_pattern = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
                    if (!email.match(mail_pattern)) {
                        alert("Please Enter a valid Mail");
                    } else if (password.length < 8) {
                        alert("Password must be greater than 8 characters!");
                    }
                    else if (!(password == confirm)) {
                        alert("Passwords don't match");
                    } else {
                        postData();
                        alert("Registration Complete!");
                        router.push('/login');
                    }
                }} >
                    Submit
                </button>
                <Link className="font-Space text-white text-sm py-5" href={'/login'}>
                    Already have an account? Login here.
                </Link>
            </div>
        </div>

    )
}

export default RegisterForm
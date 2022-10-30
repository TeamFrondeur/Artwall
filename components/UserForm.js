import React, { useState } from 'react'
import InputField from './InputField'
import Link from 'next/link'

const UserForm = ({type}) => {

  let flag = false;

  if (type === "Register")
    flag = true;

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const postData = async () => {
      const response = await fetch('/api/registeruser', {
      method: 'POST',
      body: JSON.stringify( {email: email, password: password}),
    });
    const data = await response.json();
    console.log(data);
  }

  return (
    
    <div className='bg-Card rounded-md h-96 w-96'>
        <div className='grid grid-cols-0.5 gap-4 justify-items-center my-20'>
            <h3 className='font-Space text-3xl text-white'>{type}</h3>
            <InputField type={"E-mail"} getValue={email => setEmail(email)}/>
            <InputField type={"Password"} getValue={password => setPassword(password)}/>
            <button className='btn border-primary border-2 text-white font-Space' onClick={postData}>
              Submit
            </button>
            <Link className="font-Space text-white text-sm my-5" href={flag ? '/login' : '/registration'}>
              {flag ? "Already have an account? Login here." : "Don't have an account? Register here."}
            </Link>
        </div>
    </div>
    
  )
}

export default UserForm
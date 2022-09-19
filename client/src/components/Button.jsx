import React from 'react'
import Axios from 'axios'


const Button = ({type, email, password}) => {
    const submit = () => {
        Axios.post("https://localhost:3001/register", {
            email: {email},
            password: {password}
        }).then((response) => {
            console.log(response);
        })
    };

    return <button className='custom_button' onClick={submit}>{type}</button>
}

export default Button
import { useState } from "react";


const InputField = ({type, getValue}) => {
    var flag = false;

    if (type === "E-mail")
        flag = true;
    
    const [emailReg,setEmailReg] = useState('')
    const [passwordReg,setPasswordReg] = useState('')

    return (
        <form className="inputfield">        
            <div>
                <input type = {flag ? "text" : "password"} placeholder={flag ? "Email" : "Password"} className='sm form-input rounded-md' onChange={(e) => {
                    if (type === "E-mail")
                    {
                        setEmailReg(e.target.value);
                        getValue(emailReg);
                    }
                    else 
                    {
                        setPasswordReg(e.target.value);
                        getValue(passwordReg);
                    } 
                }} />
            </div>
        </form>
    )
}

export default InputField
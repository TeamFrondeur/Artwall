import Button from "./Button";
import InputField from "./InputField";
import { useState } from "react";


const SignUp = ({label}) => {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    return (
        <div className="signup">
            <label className="signup_label">{label}</label>
            <InputField type="E-mail" getValue={email => setEmail(email) }/>
            <InputField type="Password" getValue={password => setPassword(password)}/>
            <Button type="Signup" email={email} password={password}/>
        </div>
    )
}

export default SignUp
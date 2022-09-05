import Button from "./Button";
import InputField from "./InputField";
import Paragraph from "./Paragraph";
import SignupLabel from "./SignupLabel";

const SignUp = ({label}) => {
    return (
        <div className="signup">
            <label className="signup_label">{label}</label>
            <InputField type="E-mail"/>
            <div className="Password">
                <InputField type="Password"/>
            </div>
            <Button type="Signup" />
        </div>
    )
}

export default SignUp
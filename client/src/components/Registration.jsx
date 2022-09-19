import Navbar from "./Navbar";
import SignUp from "./SignUp";
import SignupLabel from "./SignupLabel";

const Registration = () => {
    return (
       <div>
            <Navbar />
            <SignupLabel />
            <SignUp label="Registration" />
       </div>
    )
}

export default Registration
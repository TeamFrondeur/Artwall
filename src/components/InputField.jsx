const InputField = ({type}) => {
    var flag = false;

    if (type == "E-mail")
        flag = true;
    
    return (

        <form className="inputfield">
            
            <div className="inputtext">
                <input type = {flag ? "text" : "password"} placeholder={type} />
            </div>
        </form>
    )
}

export default InputField
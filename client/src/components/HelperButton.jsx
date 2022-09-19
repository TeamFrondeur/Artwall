const HelperButton = ({type}) => {
    var str = ""

    if (type === "Upload")
        str = "Upload Now"
    else str = "Watch Video"
    return (
        <button className="helper-button">{str}</button>
    )
}

export default HelperButton
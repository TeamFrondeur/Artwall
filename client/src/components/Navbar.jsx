const Navbar = () => {
    return (
        <nav className="navbar">
            <a href="/" className="site-title">Artwall</a>
            <ul>
                <li>
                    <a href="/explore">Explore</a>                    
                </li>
                <li>
                    <a href="/marketplace">Marketplace</a>
                </li>
                <li>
                    <a href="/artists">Artists</a>
                </li>
                <li>
                    <form className="searchbar">
                        <input placeholder="Search" />
                    </form>
                </li>
                <li>
                    <button className="signupButton">Signup</button>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
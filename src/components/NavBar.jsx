import { Link } from "react-router-dom"

function NavBar() {

    return(
        <nav className="navbar bg-black text-blue-400 flex justify-between p-4">
            <div className="navbar-brand hover:text-blue-500">
                <Link to="/">Movie App</Link>
            </div>
            <div className="navbar-links flex gap-4 px-4">
                <Link to="/" className="nav-link px-4 hover:text-blue-500">Home</Link>
                <Link to="/favorites" className="nav-link hover:text-blue-500">Favorites</Link>
            </div>
        </nav>
    )
}

export default NavBar;

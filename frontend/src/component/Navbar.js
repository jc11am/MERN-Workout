import { Link } from "react-router-dom"
import { useLogoutHook } from "../hooks/useLogoutHook"

const Navbar = function() {
    const { logOut } = useLogoutHook()

    const logoutUser = function(){
        logOut()
    }

    return(
        <header>
            <div className="container">
                <Link to="/">
                    <h1>Workout App</h1>
                </Link>
                <nav>
                <div>
                    <button onClick={ logoutUser } >Log Out</button>
                </div>
                    <div>
                        <Link to="/login">LogIn</Link>
                        <Link to="/signup">SignUp</Link>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Navbar
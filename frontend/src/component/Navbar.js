import { Link } from "react-router-dom"
import { useLogoutHook } from "../hooks/useLogoutHook"
import { useAuthHook } from "../hooks/useAuthHook"

const Navbar = function() {

    const { user } = useAuthHook()
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
                { user && <div>
                    <span>{user.email}</span>
                    <button onClick={ logoutUser } >Log Out</button>
                </div>}

                { !user && <div>
                    <Link to="/login">LogIn</Link>
                    <Link to="/signup">SignUp</Link>
                </div>}
                </nav>
            </div>
        </header>
    )
}

export default Navbar
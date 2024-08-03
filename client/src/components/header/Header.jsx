import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

export default function Header() {
    const { isAuthenticated } = useContext(AuthContext);

    return (
        <header className="section site-header">
            <h1>
                <Link className="home" to="/">
                    Game Logo
                </Link>
            </h1>

            <nav>
                <Link to="/games">Games</Link>

                {isAuthenticated ? (
                    <div id="user">
                        <Link to="/games/create">Create Game</Link>
                        <Link to="/logout">Logout</Link>
                    </div>
                    )
                :
                    (
                        <div id="guest">
                            <Link to="/login">Login</Link>
                            <Link to="/register">Register</Link>
                        </div>
                    )
            }
            </nav>
        </header>
    );
}
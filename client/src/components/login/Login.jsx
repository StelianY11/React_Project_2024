import { Link } from "react-router-dom";
import loginIcon from "../../../public/images/login-avatar.png";
import passwordIcon from "../../../public/images/padlock.png";


export default function Login() {
    return (
        <section id="login-page" className="auth">
            <form id="login">
                <div className="container">
                    <h1>Login</h1>

                    <div className="border"></div>

                    <div className="input-wrapper">
                        <img src={loginIcon} className="icon" />
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            name="username"
                            id="username"
                        />
                    </div>

                    <div className="input-wrapper">
                        <img src={passwordIcon} className="icon" />
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                        />
                    </div>

                    <input className="btn submit" type="submit" value="Login" />

                    <p className="field">
                        <span>If you don't have profile click <Link to="/register">here</Link></span>
                    </p>
                </div>
            </form>
        </section>
    );
}
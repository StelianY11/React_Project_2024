import { Link } from "react-router-dom";

export default function Login() {
    return (
        <section id="login-page" className="auth">
            <form id="login">
                <div className="container">
                    <h1>Login</h1>

                    <div className="border"></div>

                    <label htmlFor="username">Username:</label>
                    <input 
                        type="text"
                        name="username"
                        id="username"
                    />

                    <label htmlFor="password">Password:</label>
                    <input 
                        type="password" 
                        name="password" 
                        id="password" 
                    />

                    <input className="btn submit" type="submit" value="Login" />

                    <p className="field">
                        <span>If you don't have profile click <Link to="/register">here</Link></span>
                    </p>
                </div>
            </form>
        </section>
    );
}
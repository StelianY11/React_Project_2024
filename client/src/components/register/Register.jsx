import { Link } from "react-router-dom";
import loginIcon from "../../../public/images/login-avatar.png";
import passwordIcon from "../../../public/images/padlock.png";
import emailIcon from "../../../public/images/email.png";

export default function Register() {
    return (
        <section id="register-page" className="content auth">
            <form id="register">
                <div className="container">
                    <h1>Register</h1>

                    <div className="border"></div>

                    <div className="input-wrapper">
                        <img src={emailIcon} className="icon" />
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                        />
                    </div>

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

                    <div className="input-wrapper">
                        <img src={passwordIcon} className="icon" />
                        <label htmlFor="re-password">Repeate Password:</label>
                        <input
                            type="password"
                            name="re-password"
                            id="re-password"
                        />
                    </div>


                    <input className="btn submit" type="submit" value="Register" />

                    <p className="field">
                        <span>If you already registered click <Link to="/login">here</Link></span>
                    </p>
                </div>
            </form>
        </section>
    );
}
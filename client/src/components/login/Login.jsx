import { Link, useNavigate } from "react-router-dom";
import loginIcon from "../../../public/images/login-avatar.png";
import passwordIcon from "../../../public/images/padlock.png";
import { useForm } from "../../hooks/useForm";
import { useLogin } from "../../hooks/useAuth";


export default function Login() {
    const login = useLogin();
    const navigate = useNavigate();
    const {values, changeHandler, submitHandler} = useForm(
        {email: "", password: "" }, 
        async ({email, password}) => {
            try {
                await login(email, password)
                navigate("/")
            } catch (error) {
                console.log(error.message);
                // Have to change error message
            }
        }
    );

    return (
        <section id="login-page" className="auth">
            <form id="login" onSubmit={submitHandler}>
                <div className="container">
                    <h1>Login</h1>

                    <div className="border"></div>

                    <div className="input-wrapper">
                        <img src={loginIcon} className="icon" />
                        <label htmlFor="username">Email:</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={values.email}
                            onChange={changeHandler}
                            placeholder="dasdas@abv.bg"
                        />
                    </div>

                    <div className="input-wrapper">
                        <img src={passwordIcon} className="icon" />
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            name="password"
                            id="login-password"
                            value={values.password}
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
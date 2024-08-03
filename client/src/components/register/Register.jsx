import { Link, useNavigate } from "react-router-dom";
import loginIcon from "../../../public/images/login-avatar.png";
import passwordIcon from "../../../public/images/padlock.png";
import emailIcon from "../../../public/images/email.png";
import { useRegister } from "../../hooks/useAuth";
import { useForm } from "../../hooks/useForm";
import { useState } from "react";

const initialValues = { email: "", username: "", password: "", rePasword: "" };

export default function Register() {
    const [worngPassword, setWorngPassword] = useState("");
    const register = useRegister();
    const navigate = useNavigate();

    const registerHandler = async ({email, username, password, rePasword}) => {
        if(password !== rePasword) {
            return setWorngPassword("The passwords don`t match.");
        }

        try {
            await register(email, username, password, rePasword)
            navigate("/")
        } catch (error) {
            setWorngPassword(error.message);
            console.log(error.message);
            // Have to change error message
        }
    };

    const {values, changeHandler, submitHandler} = useForm(initialValues, registerHandler);

    return (
        <section id="register-page" className="content auth">
            <form id="register" onSubmit={submitHandler}>
                <div className="container">
                    <h1>Register</h1>

                    <div className="border"></div>

                    <div className="input-wrapper">
                        <img src={emailIcon} className="icon" />
                        <label htmlFor="ema">Email:</label>
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
                        <img src={loginIcon} className="icon" />    
                        <label htmlFor="uname">Username:</label>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            value={values.username}
                            onChange={changeHandler}
                            placeholder="Dasdas"
                        />
                    </div>

                    <div className="input-wrapper">
                        <img src={passwordIcon} className="icon" />
                        <label htmlFor="pass">Password:</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            value={values.password}
                            onChange={changeHandler}
                            placeholder="************"
                        />
                    </div>

                    <div className="input-wrapper">
                        <img src={passwordIcon} className="icon" />
                        <label htmlFor="rePass">Repeate Password:</label>
                        <input
                            type="password"
                            name="rePasword"
                            id="rePasword"
                            value={values.rePasword}
                            onChange={changeHandler}
                            placeholder="************"
                        />

                        {worngPassword && (
                            <p className="worngPassword">{worngPassword}</p>
                        )}
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
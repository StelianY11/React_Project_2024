export default function Register() {
    return (
        <section id="register-page" className="content auth">
            <form id="register">
                <div className="container">
                    <h1>Register</h1>

                    <label htmlFor="email">Email:</label>
                    <input 
                        type="email"
                        name="email"
                        id="email"
                    />

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

                    <label htmlFor="re-password">Repeate Password:</label>
                    <input
                        type="password"
                        name="re-password"
                        id="re-password"
                    />

                    <input className="btn submit" type="submit" value="Register" />

                    <p className="field">
                        <span>If you already registered click <a href="/login">here</a></span>
                    </p>
                </div>
            </form>
        </section>
    );
}
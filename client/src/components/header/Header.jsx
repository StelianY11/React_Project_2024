export default function Header() {
    return (
        <header className="section site-header">
            <h1>
                <a className="home" href="/">
                Game Logo
                </a>
            </h1>

            <nav>
                <a href="/games">Games</a>
                <a href="">About Us</a>

                <div id="user">
                    <a href="/create-game">Create Game</a>
                    <a href="/logout">Logout</a>
                </div>

                <div id="guest">
                    <a href="/login">Login</a>
                    <a href="/register">Register</a>
                </div>
            </nav>
        </header>
    );
}
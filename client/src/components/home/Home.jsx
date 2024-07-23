import hero from "../../../public/images/hero.png"

export default function Home() {
    return (
        <section id="home-page">

            <div className="message">
                <h1>Welcome to our game catalog</h1>
                <h3>we are here to discuss...</h3>
            </div>

            <img src={hero} alt="" />
        </section>
    );
}
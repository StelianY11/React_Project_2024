import hero from "../../../public/images/hero.png"

export default function Home() {
    return (
        <section id="home-page">

            <div className="message">
                <h1>Step Into the World of Incredible Games</h1>
                <h3>Explore and Enjoy a Wide Variety of Exciting Games and Find Your Next Favorite Adventure</h3>
            </div>

            <img src={hero} alt="" />
        </section>
    );
}
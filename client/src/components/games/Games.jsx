import { Link } from "react-router-dom";
import rdr from "../../../public/images/Red_Dead_Redemption_2.png";
import fifa from "../../../public/images/Fifa24.png";

export default function Games() {
    return (
        <section id="catalog">
            <h1>All Games</h1>

            <div className="border"></div>

            <div className="allGames">
                <div className="gamesInfo">
                    <img src={rdr} />
                    <div className="gameDescription">
                        <h2>Game Name: Red Dead Redemption 2</h2>
                        <h6>Category: Action</h6>
                    </div>
                    <div className="gameInfoBtns">
                        <div className="likeAndDisLike">
                            <button className="likeBtn">Like</button>
                            <button className="disLikeBtn">Dislike</button>
                        </div>
                        <Link to="/games/details" className="detailsBtn">Details</Link>
                    </div>
                </div>
            </div>

            <div className="allGames">
                <div className="gamesInfo">
                    <img src={fifa} />
                    <div className="gameDescription">
                        <h2>Game Name: Fifa 2024</h2>
                        <h6>Category: Sport</h6>
                    </div>
                    <div className="gameInfoBtns">
                        <div className="likeAndDisLike">
                            <button className="likeBtn">Like</button>
                            <button className="disLikeBtn">Dislike</button>
                        </div>
                        <Link to="/games/details" className="detailsBtn">Details</Link>
                    </div>
                </div>
            </div>

           
          <h3 className="no-articles">No articles yet</h3>
        </section>
    );
}
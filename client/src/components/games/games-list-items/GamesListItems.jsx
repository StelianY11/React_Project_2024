import { Link } from "react-router-dom";

export default function GamesListItems({
    _id,
    title,
    category,
    imageUrl,
}) {
    return (
        <div className="allGames">
                <div className="gamesInfo">
                    <img src={imageUrl}/>
                    <div className="gameDescription">
                        <h2>{title}</h2>
                        <h6>{category}</h6>
                    </div>
                    <div className="gameInfoBtns">
                        <div className="likeAndDisLike">
                            <button className="likeBtn">Like</button>
                            <button className="disLikeBtn">Dislike</button>
                        </div>
                        <Link to={`/games/${_id}/details`} className="detailsBtn">Details</Link>
                    </div>
                </div>
        </div>
    );
}
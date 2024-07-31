import { useEffect, useState } from "react";
import gamesAPI from "../../api/gamesApi";
import { useParams } from "react-router-dom";

export default function GamesDetils() {
    const [game, setGame] = useState({});
    const { gameId }= useParams();
    
    useEffect(() => {
        (async () => {
            const result = await gamesAPI.getOne(gameId);

            setGame(result);
        })();
    });

    return (
        <section id="game-details">
            <h1>Game Details</h1>
            <div className="info-section">

                <div className="game-header">
                    <img className="game-img" src={game.imageUrl} />
                    <div className="game-name">
                        <h1>{game.title}</h1>
                        <p className="type">{game.category}</p>
                    </div>

                    <div className="likes-dislieks">
                        <p>Likes: 0</p>
                        <p>DisLikes: 0</p>
                    </div>
                </div>

                <div className="border"></div>

                <p className="text">{game.summary}</p>

                <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        <li className="comment">
                            <p>Content: I rate this one quite highly.</p>
                        </li>
                        <li className="comment">
                            <p>Content: The best game.</p>
                        </li>
                    </ul>
                    <p className="no-comment">No comments.</p>
                </div>

                <div className="buttons">
                    <a href="/games/details/edit" className="button">Edit</a>
                    <a href="#" className="button">Delete</a>
                </div>
            </div>

            <article className="create-comment">
                <label>Add new comment:</label>
                <form className="form">
                    <textarea name="comment" placeholder="Comment......"></textarea>
                    <input className="btn add-comment" type="submit" value="Add Comment" />
                </form>
            </article>

        </section>
    );
}
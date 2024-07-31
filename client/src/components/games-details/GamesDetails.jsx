import { useEffect, useState } from "react";
import gamesAPI from "../../api/gamesApi";
import { useParams } from "react-router-dom";
import commentsApi from "../../api/commentsApi";

export default function GamesDetils() {
    const [game, setGame] = useState({});
    const [username, setUsername] = useState('');
    const [comment, setComment] = useState('');
    const { gameId } = useParams();

    useEffect(() => {
        (async () => {
            const result = await gamesAPI.getOne(gameId);

            setGame(result);
        })();
    }, []);

    const commentSubitHandler = async (e) => {
        e.preventDefault();

        const newComment = await commentsApi.create(gameId, username, comment);

        setGame(prevState => ({
            ...prevState,
            comments: {
                ...prevState.comments,
                [newComment._id]: newComment,
            }
        }))

        setUsername("");
        setComment("");
    }

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
                    {Object.keys(game.comments || {}).length > 0
                        ? Object.values(game.comments).map(comment => (
                                <li key={comment._id} className="comment">
                                    <p>{comment.username}: {comment.text}</p>
                                </li>
                        ))
                        : <p className="no-comment">No comments.</p>
                    }
                    </ul>

                </div>

                <div className="buttons">
                    <a href="/games/details/edit" className="button">Edit</a>
                    <a href="#" className="button">Delete</a>
                </div>
            </div>

            <article className="create-comment">
                <label>Add new comment:</label>
                <form className="form" onSubmit={commentSubitHandler}>
                    <input
                        type="text"
                        placeholder="Stelian"
                        name="username"
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                    />

                    <textarea
                        name="comment"
                        placeholder="Comment......"
                        onChange={(e) => setComment(e.target.value)}
                        value={comment}
                    ></textarea>

                    <input className="btn add-comment" type="submit" value="Add Comment" />
                </form>
            </article>

        </section>
    );
}
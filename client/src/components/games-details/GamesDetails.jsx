import { useContext, useEffect, useState } from "react";
import gamesAPI from "../../api/gamesApi";
import { useParams } from "react-router-dom";
import commentsApi from "../../api/commentsApi";
import { useGetOneGame } from "../../hooks/gamesHooks/useOneGames";
import { AuthContext } from "../../contexts/AuthContext";
import { useForm } from "../../hooks/useForm";
import { useGetAllComments, useCreateComment } from "../../hooks/useComments";

const initialValues = {
    comment: "",
};


export default function GamesDetils() {
    const { isAuthenticated } = useContext(AuthContext);
    const { gameId } = useParams();

    const [comments, setComments] = useGetAllComments(gameId);
    const createCommentGame = useCreateComment();
    const [game, setGame] = useGetOneGame(gameId);

    const {
        values,
        changeHandler,
        submitHandler,
    } = useForm(initialValues, async ({ comment }) => {
        try {
            const newComment = await createCommentGame(gameId, comment);

            setComments(oldComment => [...oldComment, newComment]);
        } catch (error) {
            console.log(error.message);
        }
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
                        {comments.map(comment => (
                            <li key={comment._id} className="comment">
                                <p>Username: {comment.text}</p>
                            </li>
                        ))
                        }
                    </ul>
                    {comments.length === 0 && <p className="no-comment">No comments.</p>}
                </div>

                {isAuthenticated && (
                    <div className="buttons">
                        <a href="/games/details/edit" className="button">Edit</a>
                        <a href="#" className="button">Delete</a>
                    </div>
                )}

            </div>

            {isAuthenticated && (
                <article className="create-comment">
                    <label>Add new comment:</label>
                    <form className="form" onSubmit={submitHandler}>
                        <textarea
                            name="comment"
                            placeholder="Comment......"
                            onChange={changeHandler}
                            value={values.comment}
                        ></textarea>

                        <input className="btn add-comment" type="submit" value="Add Comment" />
                    </form>
                </article>
            )}

        </section>
    );
}
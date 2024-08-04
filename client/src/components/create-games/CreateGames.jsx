import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useCreateGame } from "../../hooks/gamesHooks/useCreateGame";

const initialValues = {
    title: "",
    category: "",
    imageUrl: "",
    summary: "",
}

export default function CreateGames() {
    const navigate = useNavigate();
    const createGame = useCreateGame();

    const createHandler = async (values) => {
        try {
            const { _id: gameId } = await createGame(values);
            navigate(`/games/${gameId}/details`);
        } catch (error) {
            // TODO: handle error
            console.log(error.message);
        }
    };

    const {
        values,
        changeHandler,
        submitHandler,
    } = useForm(initialValues, createHandler);

    return (
        <section id="create-page">
            <form id="create" onSubmit={submitHandler}>
                <div className="createGame">

                    <h1>Create Game</h1>
                    <div className="border"></div>
                    <label htmlFor="title">Game title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={values.title}
                        onChange={changeHandler}
                        placeholder="Enter game title..."
                    />

                    <label htmlFor="category">Category:</label>
                    <input
                        type="text"
                        id="category"
                        name="category"
                        value={values.category}
                        onChange={changeHandler}
                        placeholder="Enter game category..."
                    />

                    <label htmlFor="imageUrl">Image:</label>
                    <input
                        type="text"
                        id="imageUrl"
                        name="imageUrl"
                        value={values.imageUrl}
                        onChange={changeHandler}
                        placeholder="Upload a photo..."
                    />

                    <label htmlFor="summary">Summary:</label>
                    <textarea
                        name="summary"
                        id="summary"
                        value={values.summary}
                        onChange={changeHandler}
                    >

                    </textarea>
                    <input className="btn create-page" type="submit" value="Create Game" />
                </div>
            </form>
        </section>
    );
}
import { useForm } from "../../hooks/useForm";

const initialValues = { 
    title: "",
    category: "",
    imageUrl: "", 
    summary: "",
}

export default function CreateGames() {
    const {} = useForm();

    return (
        <section id="create-page">
            <form id="create">
                <div className="createGame">

                    <h1>Create Game</h1>
                    <div className="border"></div>
                    <label>Game title:</label>
                    <input type="text" id="title" name="title" placeholder="Enter game title..."/>

                    <label>Category:</label>
                    <input type="text" id="category" name="category" placeholder="Enter game category..."/>

                    <label>Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo..."/>

                    <label>Summary:</label>
                    <textarea name="summary" id="summary"></textarea>
                    <input className="btn create-page" type="submit" value="Create Game"/>
                </div>
            </form>
        </section>
    );
}
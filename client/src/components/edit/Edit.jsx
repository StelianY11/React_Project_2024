export default function Edit() {
    return (
        <section id="create-page">
            <form id="create">
                <div className="createGame">

                    <h1>Edit Game</h1>
                    <div className="border"></div>
                    <label>Game title:</label>
                    <input type="text" id="title" name="title"/>

                    <label>Category:</label>
                    <input type="text" id="category" name="category"/>

                    <label>Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl"/>

                    <label>Summary:</label>
                    <textarea name="summary" id="summary"></textarea>
                    <input className="btn create-page" type="submit" value="Create Game"/>
                </div>
            </form>
        </section>
    );
}
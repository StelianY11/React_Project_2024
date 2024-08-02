import { useState, useEffect } from "react";
import * as gamesAPI from "../../api/gamesApi";


export function useGetAllGames() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await gamesAPI.getAll();

            setGames(result);
        })();

       //gamesAPI.getAll().then(result => setGames(result));
    }, []);

    return [games, setGames];
}
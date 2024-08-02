import { useState, useEffect } from "react";
import * as gamesAPI from "../../api/gamesApi";

export function useGetOneGame(gameId) {
    const [game, setGame] = useState({});

    useEffect(() => {
        (async () => {
            const result = await gamesAPI.getOne(gameId);

            setGame(result);
        })();
    }, [gameId]);

    return [game, setGame];
}
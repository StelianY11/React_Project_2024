import gamesAPI from "../../api/gamesApi";

export function useCreateGame(){
    const gameCreateHandler = (gameData) => gamesAPI.create(gameData);

    return gameCreateHandler;
}
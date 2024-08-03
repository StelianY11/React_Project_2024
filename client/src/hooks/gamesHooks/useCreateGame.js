import { useState, useEffect } from "react";
import * as gamesAPI from "../../api/gamesApi";

export function useCreateGame(){
    const gameCreateHandler = (gameData) => {
        gamesAPI.create(gameData);
    }

    return gameCreateHandler();
}
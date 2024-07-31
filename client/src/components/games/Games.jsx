import { Link } from "react-router-dom";

import { useState, useEffect } from "react";
import * as gamesAPI from "../../api/gamesApi";

import GamesListItems from "./games-list-items/GamesListItems";

export default function Games() {
    const [games, setGames] = useState([]);

    useEffect(() => {
       gamesAPI.getAll()
            .then(result => setGames(result));
    }, []);

    return (
        <section id="catalog">
            <h1>All Games</h1>

            <div className="border"></div>
            
            {games.map(game => <GamesListItems key={game._id} {...game} />)}
        
           
          <h3 className="no-articles">No articles yet</h3>
        </section>
    );
}
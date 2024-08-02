
import { useGetAllGames } from "../../hooks/gamesHooks/useAllGames";
import GamesListItems from "./games-list-items/GamesListItems";

export default function Games() {
   const [games, setGames] = useGetAllGames();

    return (
        <section id="catalog">
            <h1>All Games</h1>

            <div className="border"></div>
            
            {games.length > 0
                ? games.map(game => <GamesListItems key={game._id} {...game} />)
                : <h3 className="no-articles">No articles yet</h3>
            }
        
        </section>
    );
}
import { Routes, Route } from "react-router-dom";

import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

import "../public/styles/styles.css";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Home from "./components/home/Home";
import Logout from "./components/logout/Logout";
import Games from "./components/games/Games";
import CreateGames from "./components/create-games/CreateGames";
import GamesDetils from "./components/games-details/GamesDetails";
import Edit from "./components/edit/Edit";
import { AuthContextProvider } from "./contexts/AuthContext";


function App() {
  return (
    <AuthContextProvider>
      <div id="site">
        <Header />

        <main id="site-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/games" element={<Games />} />
            <Route path="/games/:gameId/details" element={<GamesDetils />} />
            <Route path="/games/details/edit" element={<Edit />} />
            <Route path="/games/create" element={<CreateGames />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </AuthContextProvider>
  )
}

export default App

import { Routes, Route} from "react-router-dom"

import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"

import "../public/styles/styles.css"
import Login from "./components/login/Login"
import Register from "./components/register/Register"
import Home from "./components/home/Home"
import Logout from "./components/logout/Logout"
import Games from "./components/games/Games"
import CreateGames from "./components/create-games/CreateGames"
import About from "./components/about/About"
import GamesDetils from "./components/games-details/GamesDetails"

function App() {

  return (
    <div id="site">
      <Header />

      <main id="site-main">
          <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/login" element={<Login />}/>
              <Route path="/register" element={<Register />}/>
              <Route path="/logout" element={<Logout />}/>
              <Route path="/games" element={<Games />}/>
              <Route path="/games/details" element={<GamesDetils />}/>
              <Route path="/games/create" element={<CreateGames />}/>
              <Route path="/about" element={<About />}/>
          </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App

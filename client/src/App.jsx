import { Routes, Route} from "react-router-dom"

import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"

import "../public/styles/styles.css"
import Login from "./components/login/Login"
import Register from "./components/register/Register"
import Home from "./components/home/Home"

function App() {

  return (
    <div id="site">
      <Header />

      <main id="site-main">
          {/* <Routes>
              <Route />
          </Routes> */}
          <Home />
          {/*<Login />*/}
          {/*<Register />*/}
      </main>

      <Footer />
    </div>
  )
}

export default App

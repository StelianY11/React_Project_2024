import { Routes, Route} from "react-router-dom"

import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"

import "../public/styles/styles.css"

function App() {

  return (
    <div id="site">
      <Header />

      <main id="site-main">
          <Routes>
              <Route />
          </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App

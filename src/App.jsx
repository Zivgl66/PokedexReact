import { Routes, BrowserRouter, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import logo from "./logo.svg";
import "./App.css";
import NavbarComponent from "./components/navbar/navbar.component";
import HomePage from "./pages/home/pokedex.page";
import PokemonCardPage from "./pages/pokemonCard/pokemonCard.page";

function App() {
  return (
    <div className="container">
      <ToastContainer />
      <BrowserRouter>
        <NavbarComponent />
        <Routes>
          <Route path={"/"} element={<HomePage />} />
          <Route path={"/card/:id"} index element={<PokemonCardPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

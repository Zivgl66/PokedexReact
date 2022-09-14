import { Routes, BrowserRouter, Route } from "react-router-dom";
// import logo from "./logo.svg";
import "./App.css";
import NavbarComponent from "./components/navbar/navbar.component";
import HomePage from "./pages/home/pokedex.page";
import PokemonCardPage from "./pages/pokemonCard/pokemonCard.page";

function App() {
  return (
    <div className="container">
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

import { useState, useEffect } from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import logo from "./logo.svg";
import "./App.css";
import NavbarComponent from "./components/navbar/navbar.component";
import OpeningAnimationComponent from "./components/openingAnimation/openingAnimation.component";
import HomePage from "./pages/home/pokedex.page";
import PokemonCardPage from "./pages/pokemonCard/pokemonCard.page";

function App() {
  const [openingAnimate, setOpeningAnimate] = useState(true);
  // make animation appear on the first load of the site
  useEffect(() => {
    if (window.sessionStorage.getItem("firstLoadDone") === null) {
      setOpeningAnimate(true);
      window.sessionStorage.setItem("firstLoadDone", 1);
    } else setOpeningAnimate(false);
  }, []);

  return openingAnimate ? (
    <div className="container">
      <OpeningAnimationComponent />
    </div>
  ) : (
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

  // <div className="container">
  //   <ToastContainer />
  //   <BrowserRouter>
  //     <NavbarComponent />
  //     <Routes>
  //       <Route path={"/"} element={<HomePage />} />
  //       <Route path={"/card/:id"} index element={<PokemonCardPage />} />
  //     </Routes>
  //   </BrowserRouter>
  // </div>
}

export default App;

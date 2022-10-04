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
  const [displayOpening, setDisplayOpening] = useState(true);
  // make animation appear on the first load of the site
  useEffect(() => {
    if (window.sessionStorage.getItem("firstLoadDone") === null) {
      window.sessionStorage.setItem("firstLoadDone", 1);
      setOpeningAnimate(false);
      setDisplayOpening(false);
    } else setOpeningAnimate(false);
  }, [openingAnimate]);

  return openingAnimate ? (
    <div className={displayOpening ? "d-block" : "d-none"}>
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

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
import FooterComponent from "./components/footer/footer.component";

function App() {
  const [openingAnimate, setOpeningAnimate] = useState(true);
  // make animation appear on the first load of the site
  useEffect(() => {
    if (window.sessionStorage.getItem("firstLoadDone") === null) {
      setTimeout(() => {
        window.sessionStorage.setItem("firstLoadDone", 1);
        setOpeningAnimate(false);
      }, 3000);
    } else {
      setOpeningAnimate(false);
    }
  }, [window.sessionStorage.getItem("firstLoadDone")]);

  return (
    <div
      className="container"
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      {openingAnimate ? (
        <OpeningAnimationComponent />
      ) : (
        <>
          <ToastContainer />
          <BrowserRouter>
            <NavbarComponent />
            <div
              className="main"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100vh",
              }}
            >
              <Routes>
                <Route path={"/"} element={<HomePage />} />
                <Route path={"/card/:id"} index element={<PokemonCardPage />} />
              </Routes>
              <FooterComponent />
            </div>
          </BrowserRouter>
        </>
      )}
    </div>
  );
}

export default App;

import "./navbar.component.css";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useLocation } from "react-router-dom";

const NavbarComponent = () => {
  const location = useLocation();

  const divStyle = {
    fontFamily: "Raleway, sans-serif",
    fontSize: "36px",
    fontWeight: "800",
    lineHeight: "36px",
    margin: "0 0 24px",
    textAlign: "center",
    textTransform: "uppercase",
  };

  const refreshPage = () => {
    if (location.pathname === "/") window.location.reload(false);
  };
  return (
    <nav className="navbar" style={{ backgroundColor: "#3B4CCA" }}>
      <div className="container-fluid d-flex justify-content-center">
        <NavLink
          className="navbar-brand p-1 text-white"
          to="/"
          onClick={refreshPage}
        >
          <img
            src={logo}
            alt="pokeball logo"
            width="36"
            height="36"
            className="d-inline-block mx-1 "
            style={{ verticalAlign: "sub", display: "inline-block" }}
          />
          <span style={divStyle}>pokedex</span>
        </NavLink>
      </div>
    </nav>
  );
};

export default NavbarComponent;

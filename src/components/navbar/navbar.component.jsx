import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

const NavbarComponent = () => {
  const divStyle = {
    fontFamily: "Raleway, sans-serif",
    fontSize: "36px",
    fontWeight: "800",
    lineHeight: "36px",
    margin: "0 0 24px",
    textAlign: "center",
    textTransform: "uppercase",
  };

  return (
    <nav className="navbar  bg-primary bg-gradient ">
      <div className="container-fluid">
        <NavLink className="navbar-brand p-1 text-white" to="/">
          <img
            src={logo}
            alt="pokeball logo"
            width="36"
            height="36"
            className="d-inline-block mx-1"
            style={{ verticalAlign: "sub", display: "inline-block" }}
          />
          <span style={divStyle}>pokedex</span>
        </NavLink>
        <span>©Zivgl66</span>
      </div>
    </nav>
  );
};

export default NavbarComponent;

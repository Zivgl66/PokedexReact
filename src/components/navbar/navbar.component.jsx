import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

const NavbarComponent = () => {
  return (
    <nav className="navbar bg-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand p-1" to="/">
          <img
            src={logo}
            alt="pokeball logo"
            width="30"
            height="24"
            className="d-inline-block m-1"
          />
          Pokedex
        </NavLink>
      </div>
    </nav>
  );
};

export default NavbarComponent;

import "./miniCard.component.css";
// import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Fragment } from "react";
//validate the url
import validator from "validator";
import { capitalize, getIDFromUrl, checkImage } from "../../utils/functions";

const MiniCardComponent = (props) => {
  const navigate = useNavigate();

  //style for the table
  const divStyle = {
    backgroundColor: "#b5c7cc7a",
    borderRadius: "50px",
  };
  let pokemonID = getIDFromUrl(props.pokemon.url);
  //get the src for the pokemon img using his ID
  let imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonID}.png`;

  //if no image for the pokemon, use this one
  let noImg =
    "https://irisvision.com/wp-content/uploads/2019/01/no-profile-1.png";

  //handle the click and redirect to a card with the id of the pokemon
  const handleClick = () => {
    // console.log("clicked id: ", getIDFromUrl(props.pokemon.url));
    navigate(`/card/${getIDFromUrl(props.pokemon.url)}`);
  };

  // console.log(checkImage(imgSrc));
  return (
    <Fragment>
      <div
        className="card text-center m-auto w-50 mb-2 bounce"
        style={divStyle}
      >
        <div className="card-header">
          <h6 className="text-primary">{capitalize(props.pokemon.name)}</h6>
        </div>
        <button
          type="button"
          onClick={handleClick}
          className="btn btn-light btn-lg"
        >
          <img
            src={
              checkImage(
                `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonID}.png`
              )
                ? imgSrc
                : noImg
            }
            className="card-img-top mx-auto w-50 h-50"
            alt="pokemon image"
          ></img>
        </button>
        <div className="card-footer text-muted">
          <label>#{pokemonID}</label>
        </div>
      </div>
    </Fragment>
  );
};

export default MiniCardComponent;

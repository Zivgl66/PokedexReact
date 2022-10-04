import "./miniCard.component.css";
import { useNavigate } from "react-router-dom";
import { capitalize, getIDFromUrl, checkImage } from "../../utils/functions";
import pofilePokeball from "../../assets/profilePokeball.png";

const MiniCardComponent = (props) => {
  const navigate = useNavigate();
  let pokemonID = getIDFromUrl(props.pokemon.url);
  //get the src for the pokemon img using his ID
  let imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonID}.png`;

  //if no image for the pokemon, use this one
  // let noImg =
  //   "https://irisvision.com/wp-content/uploads/2019/01/no-profile-1.png";

  //handle the click and redirect to a card with the id of the pokemon
  const handleClick = () => {
    navigate(`/card/${getIDFromUrl(props.pokemon.url)}`);
  };

  return (
    <>
      <div className="animate__animated animate__jackInTheBox">
        <a href="#" onClick={handleClick} className="card mt-2 ">
          <div className="image-hover-zoom">
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonID}.png`}
              className="card__image"
              alt="pokemon image"
            />
          </div>
          <div className="card__overlay">
            <div className="card__header">
              <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                <path />
              </svg>
              <img
                className="card__thumb"
                src={pofilePokeball}
                alt="pokeball"
              />
              <div className="card__header-text">
                <h3 className="card__title">
                  {capitalize(props.pokemon.name)}
                </h3>
                <span className="card__status">#{pokemonID}</span>
              </div>
            </div>
          </div>
        </a>
      </div>
    </>
  );
};

export default MiniCardComponent;

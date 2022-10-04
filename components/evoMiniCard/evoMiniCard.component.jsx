import { capitalize } from "../../utils/functions";
import { useNavigate } from "react-router-dom";
import "./evoMiniCard.component.css";
const EvoMiniCardComponent = (props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/card/${props.evo.id}`);
  };
  return (
    <>
      <div className="evolutionCard">
        <a href="#" onClick={handleClick} className="card2 mx-2 my-1">
          <div className="image-hover-zoom">
            <img src={props.evo.image} className="card2__image" alt="" />
          </div>
          <div className="card2__header-text">
            <h3 className="card2__title">{capitalize(props.evo.name)}</h3>
            <span className="card2__status">#{props.evo.id}</span>
          </div>
        </a>
      </div>
    </>
  );
};

export default EvoMiniCardComponent;

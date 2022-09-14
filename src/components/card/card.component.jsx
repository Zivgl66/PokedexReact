import { useEffect, useState, Fragment } from "react";
import { Link } from "react-router-dom";
import { capitalize, getTypes } from "../../utils/functions";
import TypeBtnsComponent from "../typeBtns/typeBtns.component";
import EvoMiniCardComponent from "../evoMiniCard/evoMiniCard.component";
import { useNavigate } from "react-router-dom";

const CardComponent = ({
  name,
  height,
  index,
  weight,
  image,
  ability,
  type,
  evolutions,
}) => {
  // declaring the types array , evolutions array 
  const [typesArray, setTypesArray] = useState([]);
  const [evosArray, setEvosArray] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setTypesArray(getTypes(type));
    setEvosArray(evolutions);
  }, [type]);

  const handleClick = () => {
    navigate("/");
  };
  console.log(evolutions);

  return (
    <>
      <div className="card text-center m-auto w-50">
        <div className="card-header">
          <h3>{capitalize(name)}</h3>
        </div>

        <Link to="#" className="linkButton">
          <img
            src={image}
            className="card-img-top mx-auto w-50 h-50"
            alt="..."
          ></img>
        </Link>
        <div className="card-body">
          <h5 className="card-title">Index: #{index}</h5>
          <h6 className="text-muted">Height: {height}cm</h6>
          <h6 className="text-muted">Weight: {weight}kg</h6>
          <h6 className="text-muted">
            <span> Abilities: </span>
            {ability.map((ability, index) => {
              return (
                <span key={`uniqKey_${index}`}>
                  {" "}
                  {(index ? ", " : "") + ability.ability.name}
                </span>
              );
            })}
          </h6>
          {typesArray.map((item, idx) => {
            return <TypeBtnsComponent key={"btnK" + idx} type={item} />;
          })}
        </div>
        <div className="card-footer text-muted d-flex flex-row bd-highlight justify-content-center">
          {evosArray.map((obj, idx) => {
            if (obj.name !== name)
              return <EvoMiniCardComponent key={"evoK" + idx} evo={obj} />;
          })}
        </div>
        <div>
          <button onClick={handleClick}>Search</button>
        </div>
      </div>
    </>
  );
};

export default CardComponent;

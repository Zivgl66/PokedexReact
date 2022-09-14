import { Fragment } from "react";
import { capitalize } from "../../utils/functions";
import { useNavigate } from "react-router-dom";

const EvoMiniCardComponent = (props) => {
  const navigate = useNavigate();
  // console.log("from last component: ", props.evo);

  const handleClick = () => {
    // console.log("clicked id: ", props.evo.id);
    navigate(`/card/${props.evo.id}`);
  };
  return (
    <Fragment>
      <div className="card text-center m-auto w-50">
        <div className="card-header">
          <h6>{capitalize(props.evo.name)}</h6>
        </div>
        <button onClick={handleClick}>
          <img
            src={props.evo.image}
            className="card-img-top mx-auto w-50 h-50"
            alt="pokemon's evolution"
          ></img>
        </button>
        <div className="card-footer text-muted">
          <label>#{props.evo.id}</label>
        </div>
      </div>
    </Fragment>
  );
};

export default EvoMiniCardComponent;

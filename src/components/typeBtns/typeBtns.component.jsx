import { Link } from "react-router-dom";

const TypeBtnsComponent = (props) => {
  const divStyles = {
    cursor: "default",
    backgroundColor: props.type.color,
  };
  return (
    <Link to="#" className="btn p-1 m-1" style={divStyles}>
      <img
        src={props.type.url}
        alt="pokemon type"
        className=" img-responsive img-rounded m-1"
        width="25px"
      />
      <span className="p-1">{props.type.type}</span>
    </Link>
  );
};

export default TypeBtnsComponent;

import { Link } from "react-router-dom";

const TypeBtnsComponent = (props) => {
  return (
    <Link
      to="#"
      className="btn m-1"
      style={{ backgroundColor: props.type.color }}
    >
      <img
        src={props.type.url}
        alt="pokemon type"
        className=" img-responsive img-rounded m-1"
        width="25px"
      />
      {props.type.type}
    </Link>
  );
};

export default TypeBtnsComponent;

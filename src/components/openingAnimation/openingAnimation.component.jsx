import "./openingAnimation.component.css";
import pokeball from "../../assets/openingPokeball.png";


const OpeningAnimationComponent = () => {
  return (
    <div className="container vh-100 d-flex align-items-center justify-content-center">
      <div className="pokeball">
        <img src={pokeball} alt="pokeball vector" />
      </div>
    </div>
  );
};

export default OpeningAnimationComponent;

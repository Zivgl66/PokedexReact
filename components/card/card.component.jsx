import "./card.component.css";
import { useEffect, useState } from "react";
import { capitalize, getTypes } from "../../utils/functions";
import TypeBtnsComponent from "../typeBtns/typeBtns.component";
import EvoMiniCardComponent from "../evoMiniCard/evoMiniCard.component";
import { Row, Col, Container } from "react-bootstrap";
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
  description,
}) => {
  // declaring the types array , evolutions array
  const [typesArray, setTypesArray] = useState([]);
  const [evosArray, setEvosArray] = useState([]);
  const navigate = useNavigate();
  const [next, setNext] = useState(index + 1);
  const [prev, setPrev] = useState(index - 1);
  const [isLoading, setIsLoading] = useState(true);

  const divStyle = {
    backgroundColor: "#e0dada30",
    borderRadius: "25px",
    padding: "10px 20px",
    margin: "10px 10px 10px 10px",
    width: "auto",
  };

  useEffect(() => {
    setTypesArray(getTypes(type));
    // evolutions.sort((a, b) => a.id - b.id);
    console.log(evolutions);
    setEvosArray(evolutions);
  }, [type, evolutions]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    if (index === 1) setPrev(905);
    if (index === 905) setNext(1);
  }, [index]);

  const handleClickNext = () => {
    navigate(`/card/${next}`);
  };
  const handleClickPrev = () => {
    navigate(`/card/${prev}`);
  };
  const handleClickSearch = () => {
    navigate(`/`);
  };
  return isLoading ? (
    <div className="d-flex">
      <div className="loader my-auto mx-auto">
        <div className="ring "></div>
      </div>
    </div>
  ) : (
    <>
      <section
        className="section about-section gray-bg animate__animated animate__slideInLeft"
        id="about"
      >
        <div className="container">
          <div className="row row-cols-3 d-flex mb-3">
            <div
              className=" col-lg-4 col-md-4 col-sm-4 col-xs-1"
              style={{ backgroundColor: " #FF0000" }}
            >
              <a
                onClick={handleClickPrev}
                className="btn text-white"
                style={{
                  margin: "5px",
                  padding: "5px 10px",
                  outline: "solid",
                }}
              >
                previous
              </a>
            </div>
            <div
              className=" col-lg-4 col-md-4 col-sm-4 col-xs-1 d-flex justify-content-center"
              style={{ backgroundColor: " #FF0000" }}
            >
              <a
                onClick={handleClickSearch}
                className="btn text-white"
                style={{ margin: "5px", padding: "5px 15px", outline: "solid" }}
              >
                search
              </a>
            </div>
            <div
              className=" col-lg-4 col-md-4 col-sm-4 col-xs-1 d-flex justify-content-end"
              style={{ backgroundColor: " #FF0000" }}
            >
              <a
                onClick={handleClickNext}
                className="btn text-white"
                style={{ margin: "5px", padding: "5px 20px", outline: "solid" }}
              >
                next
              </a>
            </div>
          </div>
          <div className="row align-items-center flex-row-reverse">
            <div className="col-lg-6 col-md-10 col-sm-12">
              <div className="about-text">
                <h3 className="dark-color">{capitalize(name)}</h3>
                <h6 className="theme-color lead">
                  <mark> Index: #{index}</mark>
                </h6>
                <p>{description}</p>
                <div className="row about-list">
                  <div className="col-md-6">
                    <div className="media">
                      <label>Height:</label>
                      <p>{height}cm</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="media">
                      <label>Weight:</label>
                      <p>{weight}kg</p>
                    </div>
                  </div>
                </div>
                <div className="row about-list">
                  <div className="col-md-8">
                    <div className="media">
                      <label>Abilities:</label>
                      <p>
                        {ability.map((ability, index) => {
                          return (
                            <span key={`uniqKey_${index}`}>
                              {" "}
                              {(index ? ", " : "") + ability.ability.name}
                            </span>
                          );
                        })}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row about-list">
                  <div className="col-md">
                    <div className="media mt-1">
                      <label>Type:</label>
                      {typesArray.map((item, idx) => {
                        return (
                          <TypeBtnsComponent key={"btnK" + idx} type={item} />
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-10 col-sm-12">
              <div className="about-avatar">
                <img
                  src={image}
                  title="pokemon's picture"
                  alt="pokemon's picture"
                />
              </div>
            </div>
          </div>
          {evosArray.length > 1 ? (
            <div className="d-flex evoCard">
              <Container fluid className="mx-auto" style={divStyle}>
                <Row className="d-flex fatherDiv justify-content-center">
                  {evosArray.map((obj, idx) => {
                    if (evosArray.length !== 1)
                      return (
                        <>
                          <Col
                            key={idx}
                            xs={8}
                            sm={5}
                            md={4}
                            lg={3}
                            className="text-center childDiv d-flex align-items-center"
                          >
                            <EvoMiniCardComponent evo={obj} key={idx} />
                          </Col>
                        </>
                      );
                  })}
                </Row>
              </Container>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </section>
    </>
  );
};

export default CardComponent;

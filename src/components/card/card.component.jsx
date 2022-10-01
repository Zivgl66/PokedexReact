import "./card.component.css";
import { useEffect, useState } from "react";
import { capitalize, getTypes } from "../../utils/functions";
import TypeBtnsComponent from "../typeBtns/typeBtns.component";
import EvoMiniCardComponent from "../evoMiniCard/evoMiniCard.component";
import { Row, Col, Container } from "react-bootstrap";

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

  const divStyle = {
    backgroundColor: "#e0dada30",
    borderRadius: "25px",
    padding: "10px 20px",
    margin: "10px 10px 10px 10px",
    width: "auto",
  };

  useEffect(() => {
    setTypesArray(getTypes(type));
    setEvosArray(evolutions);
  }, [type]);

  return (
    <>
      <section className="section about-section gray-bg" id="about">
        <div className="container">
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
          <div className="d-flex">
            <Container fluid className="mx-auto" style={divStyle}>
              <Row className="d-flex fatherDiv justify-content-center">
                {evosArray.map((obj, idx) => {
                  if (evosArray.length !== 1)
                    return (
                      <>
                        <Col
                          key={idx}
                          xs={6}
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
        </div>
      </section>
    </>
  );
};

export default CardComponent;

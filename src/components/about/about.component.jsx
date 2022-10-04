import { useEffect } from "react";
import { useState } from "react";
import "./about.component.css";
const AboutComponent = (props) => {
  const [showP, setShowP] = useState(true);

  //check if clicked on the search button, if so, make the about disappear
  useEffect(() => {
    if (props.clickedSearch) setShowP(false);
  }, [props.clickedSearch]);

  return (
    <>
      <div
        className={
          showP
            ? " d-flex mt-5 text-center"
            : "d-flex mt-5 text-center animate__animated animate__backOutLeft position-absolute"
        }
        onClick={() => setShowP(false)}
        style={{ cursor: "pointer" }}
      >
        <div
          className=" container-fluid justify-content-center "
          style={{ backgroundColor: "#e6d77b21" }}
        >
          <p>
            <span className="fs-3 fw-bold text-decoration-underline">
              Welcome to my Pokedex project <br />
            </span>
            <span className="about_p fs-4">
              Here you can find information about Pokemon from each generation,
              <br />
              just search by name of pokemon or id number. Enjoy!
              <br />
              <span className="fst-italic lh-lg">
                <mark>Stack: React, REST API, JS</mark> <br />
              </span>
            </span>
          </p>
          <div className="fs-6 animate__animated animate__headShake ">
            <span>click to make me disappear</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutComponent;

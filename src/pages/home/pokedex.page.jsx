import { useState, useEffect } from "react";
import SearchbarComponent from "../../components/searchBar/searchBar.component";
import TableComponent from "../../components/table/table.component";
// axios
import axios from "axios";
// joi validation
import Joi from "joi-browser";
import searchSchema from "../../validation/search.validation";
//toast for better notification
import { toast } from "react-toastify";
//loader for page
import "../loader.css";
//functions
import { onlyNumbers, ifInNumber } from "../../utils/functions";
import AboutComponent from "../../components/about/about.component";

const HomePage = () => {
  //vars
  const [pokemonDataArray, setPokemonDataArray] = useState([]);
  //loading screen
  const [isLoading, setIsLoading] = useState(false);
  //show more/less button
  const [showMore, setShowMore] = useState(false);
  const [filteredArray, setFilteredArray] = useState([]);
  const [slicedArray, setSlicedArray] = useState([]);
  let [maxShow, setMaxShow] = useState();
  const [pokemonArr2, setPokemonArr2] = useState([]);
  const [clickedSearch, setClickedSearch] = useState(false);
  // const [openingAnimate, setOpeningAnimate] = useState(true);

  let array = [];
  let obj = {};
  let slicedArr = [];
  let pokeAPIURL = "https://pokeapi.co/api/v2/pokemon/";

  // make animation appear on the first load of the site
  // useEffect(() => {
  //   if (window.sessionStorage.getItem("firstLoadDone") === null) {
  //     setOpeningAnimate(true);
  //     window.sessionStorage.setItem("firstLoadDone", 1);
  //   } else setOpeningAnimate(false);
  // }, []);

  // make the axios request on load of the homepage
  useEffect(() => {
    setPokemonDataArray([]);
    axios
      .get(`${pokeAPIURL}?limit=905`)
      .then((res) => setPokemonDataArray(res.data.results));
    setPokemonArr2([]);
  }, []);

  const handleFormSubmit = (input) => {
    //activate the loading screen
    setIsLoading(true);
    setClickedSearch(true);
    // set the max showing items back to 12
    setMaxShow((maxShow = 12));
    // set the button to show more (instead of show less)
    setShowMore(false);
    //validation the input
    const validatedValue = Joi.validate({ input }, searchSchema, {
      abortEarly: false,
    });
    const { error } = validatedValue;
    if (error) {
      //display toast if theres an error in the input
      for (let item of error.details) {
        console.log(error);
        toast.error(item.message.replaceAll('"', ""));
      }
    } else {
      setPokemonArr2([]);
      if (onlyNumbers(input)) {
        array = pokemonDataArray.filter((el, i) => {
          return ifInNumber(input, (i + 1).toString());
        });
        if (array.length === 0) {
          toast.error("Pokemon could not be found! try again", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
            theme: "colored",
          });
          setIsLoading(false);
        } else {
          setFilteredArray(array);
          if (array.length > 12) {
            slicedArr = array.slice(0, maxShow);
            setSlicedArray(slicedArr);
            setPokemonArr2(slicedArr);
            setTimeout(() => {
              setIsLoading(false);
            }, 1000);
          } else {
            setPokemonArr2(array);
            setTimeout(() => {
              setIsLoading(false);
            }, 1000);
          }
        }
        //end loading screen
      } else {
        obj = pokemonDataArray.find((pokemon) => pokemon.name === input);
        if (obj) setPokemonArr2((state) => [...state, obj]);
        else {
          toast.error("Pokemon could not be found! try again", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
            theme: "colored",
          });
        }
        //end loading screen
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      }
    }
  };

  const handleClickShowMore = () => {
    setMaxShow((maxShow += 12));
    if (!showMore) {
      slicedArr = filteredArray.slice(0, maxShow);
      setPokemonArr2(slicedArr);
      if (slicedArr.length >= filteredArray.length) {
        setShowMore(true);
      }
    } else {
      slicedArr = filteredArray.slice(0, 12);
      setPokemonArr2(slicedArr);
      setShowMore(false);
    }
  };

  return (
    <>
      <div className="container">
        <SearchbarComponent
          handleFormSubmit={handleFormSubmit}
          pokemonsArr={pokemonDataArray}
        />
        <AboutComponent clickedSearch={clickedSearch} />
        {isLoading ? (
          <div className="d-flex">
            <div className="loader my-auto mx-auto">
              <div className="ring "></div>
            </div>
          </div>
        ) : (
          (pokemonArr2.length > 0 && pokemonArr2.length < 12 && (
            <TableComponent pokemonArr={pokemonArr2} />
          )) ||
          (pokemonArr2.length > 11 && (
            <>
              <TableComponent pokemonArr={pokemonArr2} />
              <div className="text-center">
                <button
                  className="btn showBtn m-3"
                  style={{ backgroundColor: "#FFDE00bf" }}
                  onClick={handleClickShowMore}
                >
                  {showMore ? (
                    <span> Show Less </span>
                  ) : (
                    <span> Show More </span>
                  )}{" "}
                </button>
              </div>
            </>
          ))
        )}
      </div>
    </>
  );
};

export default HomePage;

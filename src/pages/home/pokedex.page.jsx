import { Fragment, useState, useEffect } from "react";
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

const HomePage = () => {
  //vars
  const [searchInput, setSearchInput] = useState("");
  const [pokemonDataArray, setPokemonDataArray] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  let array = [];
  const [pokemonArr2, setPokemonArr2] = useState([]);
  let obj = {};
  let pokeAPIURL = "https://pokeapi.co/api/v2/pokemon/";

  useEffect(() => {
    setPokemonArr2([]);
  }, []);

  const handleFormSubmit = (input) => {
    //activate the loading screen
    setIsLoading(true);
    //setting the search input variable
    setSearchInput(input);

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
      //axios request to the pokemon api
      // console.log("search: ", input);
      if (onlyNumbers(input)) {
        axios
          .get(`${pokeAPIURL}?limit=1154`)
          .then((res) => {
            setPokemonDataArray(res.data.results);
            array = res.data.results;
            setPokemonArr2(
              array.filter((el, i) => {
                return ifInNumber(input, i + 1);
              })
            );
            //end loading screen
            setIsLoading(false);
          })
          .catch((err) => console.error("error from axios: ", err));
      } else {
        axios
          .get(`${pokeAPIURL}${input}`)
          .then((res) => {
            obj = {
              name: res.data.name,
              url: pokeAPIURL + res.data.id,
            };
            setPokemonArr2((state) => [...state, obj]);
            //end loading screen
            setIsLoading(false);
          })
          .catch((err) => console.error("error from axios: ", err));
      }
    }
  };

  return (
    <Fragment>
      <div className="container">
        <SearchbarComponent handleFormSubmit={handleFormSubmit} />
        {isLoading ? (
          <div className="d-flex">
            <div className="loader my-auto mx-auto">
              <div className="ring "></div>
            </div>
          </div>
        ) : (
          pokemonArr2.length > 0 && <TableComponent pokemonArr={pokemonArr2} />
        )}
      </div>
    </Fragment>
  );
};

export default HomePage;

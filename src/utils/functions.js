// axios
import axios from "axios";
// import symbols array (types)
import typeSymbolsArray from "./symbols";

//capitalizes the first letter of a string
function capitalize(s) {
  return s[0].toUpperCase() + s.slice(1);
}

// find the types from the symbols array, push the type object to a new array and return it
function getTypes(types) {
  let typesArr = [];
  types.forEach((item) => {
    let type = typeSymbolsArray.find(
      (symbol) => symbol.type === capitalize(item.type.name)
    );
    typesArr = [...typesArr, type];
  });
  return typesArr;
}

//check if a string is number
function onlyNumbers(str) {
  return /^[0-9]*$/.test(str);
}

//check if a string is only letters
function onlyLetters(str) {
  return /^[A-Za-z]*$/.test(str);
}

//send the api req for all the pokemons
const sendReqAllPokemon = () => {
  try {
    axios.get("https://pokeapi.co/api/v2/pokemon/?limit=1154").then((res) => {
      return res;
    });
  } catch (err) {
    console.error("error from axios 1154 request: ", err);
    return err;
  }
};

//check if the digit exists in the number
const ifInNumber = (inputNum, indexNum) => {
  return indexNum.includes(inputNum);
};

//get the id of a pokemon from the url
const getIDFromUrl = (url) => {
  return url.split("/").at(6);
};

//check if a url has a valid image (ture/false)
function checkImage(url) {
  let http = new XMLHttpRequest();
  http.open("HEAD", url, false);
  http.send();
  if (http.status !== 404) return true;
  else return false;
}

export {
  capitalize,
  getTypes,
  onlyNumbers,
  onlyLetters,
  sendReqAllPokemon,
  ifInNumber,
  getIDFromUrl,
  checkImage,
};

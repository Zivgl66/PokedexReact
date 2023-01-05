import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CardComponent from "../../components/card/card.component";
import "../loader.css";
import pofilePokeball from "../../assets/profilePokeball.png";

const PokemonCardPage = () => {
  //getting the id of the pokemon from the url
  let { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [pokeData, setPokeData] = useState({});
  const [evolutionsArrayData, setEvolutionsArrayData] = useState([]);
  const [allDone, setAllDone] = useState(false);
  const [pokemonDesc, setPokemonDesc] = useState("");

  //do the axios request for the evolutions and get their names , push it to an array
  const pushArrayEvolutions = (url) => {
    axios
      .get(url)
      .then((res) => {
        //getting the description of the pokemon in english and removing unnecessary parts of it
        setPokemonDesc(
          res.data.flavor_text_entries
            .find((o) => o.language.name === "en")
            .flavor_text.replace("\f", " ")
        );
        if (res.data.evolution_chain) {
          if (res.data.evolution_chain.url) {
            axios
              .get(res.data.evolution_chain.url)
              .then((res) => {
                const tmpArray = [];
                //push 1st evolution name to the array
                tmpArray.unshift(res.data.chain.species.name);
                if (res.data.chain.evolves_to.length !== 0) {
                  //push 2nd evolution name to the array
                  tmpArray.push(res.data.chain.evolves_to[0].species.name);
                  if (res.data.chain.evolves_to[0].evolves_to[0]) {
                    //push 3rd evolution name to the array
                    tmpArray.push(
                      res.data.chain.evolves_to[0].evolves_to[0].species.name
                    );
                  }
                }
                getEvolutions(tmpArray);
              })
              .catch((error) =>
                console.log("error from evolution chain req: ", error)
              );
          }
        } else {
          setEvolutionsArrayData([]);
          setAllDone(true);
        }
      })
      .catch((error) => {
        console.log("error from species evo req: ", error);
      });
  };

  //get the information about the evolutions and push them into an array
  const getEvolutions = async (evoArr) => {
    const tmpValue = [];
    const promises = new Promise((res, rej) => {
      evoArr.forEach(async (name, index, array) => {
        try {
          const res = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${name}`
          );
          let pokemon = {
            name: res.data.name,
            image: res.data.sprites.other["official-artwork"].front_default,
            id: res.data.id,
          };
          tmpValue.push(pokemon);
        } catch (err) {
          console.log("error from pokemon evolution fetch: ", err);
        }
        if (index === array.length - 1) res();
      });
    });
    promises.then(() => {
      setEvolutionsArrayData(tmpValue);
      setTimeout(() => {
        setAllDone(true);
      }, 500);
    });
  };

  //useeffect to get the pokemon's data
  useEffect(() => {
    setAllDone(false);
    setIsLoading(true);
    const getData = async () => {
      try {
        const { data } = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${id}/`
        );
        if (data) {
          setPokeData(data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, [id]);

  //useeffect to check theres pokemon data and send another url for an axios request if there is
  useEffect(() => {
    if (Object.keys(pokeData).length !== 0) {
      pushArrayEvolutions(pokeData.species.url);
    }
  }, [pokeData]);

  //useeffect to check if all the loading is done
  useEffect(() => {
    if (allDone) {
      setIsLoading(false);
    }
  }, [allDone]);

  return isLoading ? (
    <div className="d-flex">
      <div className="loader my-auto mx-auto">
        <div className="ring ">
          <img src={pofilePokeball} alt="" />
        </div>
      </div>
    </div>
  ) : (
    <>
      <CardComponent
        key={pokeData.name + "xx"}
        name={pokeData.name}
        type={pokeData.types}
        ability={pokeData.abilities}
        index={pokeData.id}
        image={pokeData.sprites.other["official-artwork"].front_default}
        height={pokeData.height * 10}
        weight={pokeData.weight / 10}
        description={pokemonDesc}
        evolutions={evolutionsArrayData.sort((a, b) => a.id - b.id)}
        stats={pokeData.stats}
      />
    </>
  );
};

export default PokemonCardPage;

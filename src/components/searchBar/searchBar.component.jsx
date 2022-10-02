import "./searchBar.component.css";
import { useState } from "react";
// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchbarComponent = (props) => {
  const [searchInput, setSearchInput] = useState("");

  //functions:
  //set the input value from the search
  const handleSearchChange = (ev) => {
    setSearchInput(ev.target.value.toLowerCase());
  };

  const handleFormSubmitSearchBar = async (ev) => {
    // prevent default submit
    ev.preventDefault();
    props.handleFormSubmit(searchInput);
  };

  const handleSearch = (v) => {
    setSearchInput(v);
    props.handleFormSubmit(v);
  };

  return (
    <>
      <div className="container-fluid mt-2 mb-2 searchForm">
        <form
          className="d-flex justify-content-center"
          role="search"
          onSubmit={handleFormSubmitSearchBar}
        >
          <input
            className="form-control w-50"
            type="search"
            placeholder="Name / Index"
            aria-label="Search"
            value={searchInput}
            onChange={handleSearchChange}
          />
          <button
            className="btn mx-2"
            style={{ backgroundColor: " #FF0000bf" }}
            type="submit"
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </form>
        <div className="dropdown w-50 ">
          {props.pokemonsArr
            .filter((item) => {
              const searchTerm = searchInput.toLowerCase();
              const pokemonName = item.name.toLowerCase();
              return (
                searchTerm &&
                pokemonName.startsWith(searchTerm) &&
                pokemonName !== searchTerm
              );
            })
            .slice(0, 10)
            .map((item) => (
              <div
                onClick={() => handleSearch(item.name)}
                className="dropdown-row"
                key={item.name}
              >
                {item.name}
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default SearchbarComponent;

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

  return (
    <>
      <div className="container-fluid mt-2 mb-2">
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
          <button className="btn btn-outline-success mx-2" type="submit">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </form>
      </div>
    </>
  );
};

export default SearchbarComponent;


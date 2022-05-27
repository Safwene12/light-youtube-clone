import React, { useState } from "react";

const SearchBar = ({onFormSubmit}) => {

  const [ term, setTerm ] = useState("");

  const onInputClick = (event) => {
    event.preventDefault();
    onFormSubmit(term);
  };

  const onInputChange = (event) => {
    setTerm(event.target.value );
  }

  return (
    <div className="search-bar ui segment">
      <form className="ui form" onSubmit={onInputClick}>
          <div className="field">
              <label>Video Search</label>
              <input type="text" value={term} onChange={onInputChange} />
          </div>
      </form>
    </div>
  );
  
}

export default SearchBar;

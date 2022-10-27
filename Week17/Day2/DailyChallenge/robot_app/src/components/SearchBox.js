import React from "react";

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div>
      <input id="search-bar" type="search" placeholder="Search robots..." onChange={searchChange} />
    </div>
  );
};

export default SearchBox;

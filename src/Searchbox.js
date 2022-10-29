import React from "react";

const Searchbox = ({ searchField, searchPanel }) => {
  return (
    <div className="tc ma2">
      <input
        className="ba b--green pa2"
        type="search"
        placeholder="search meal..."
        onChange={searchPanel}
      />
    </div>
  );
};
export default Searchbox;
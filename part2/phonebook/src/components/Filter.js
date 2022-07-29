import React from "react";

const Filter = ({ handleFilter }) => {
  return (
    <>
      filter shown with:
      <input onChange={handleFilter} />
    </>
  );
};
export default Filter;

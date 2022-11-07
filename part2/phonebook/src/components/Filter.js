import React from "react";

const Filter = ({ filterList, setFilterList }) => {
  return (
    <div>
      <form>
        <div>
          filter shown with:{" "}
          <input
            value={filterList}
            onChange={(e) => setFilterList(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default Filter;

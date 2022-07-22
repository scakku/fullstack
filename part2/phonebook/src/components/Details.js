import React from "react";

const Details = ({ person }) => {
  return (
    <li>
      {person.name} {person.number}
    </li>
  );
};

export default Details;

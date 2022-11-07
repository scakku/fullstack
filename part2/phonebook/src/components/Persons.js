import React from "react";

const Persons = ({ person, handleDeleteButton }) => {
  return (
    <div>
      {person.name} {person.number}{" "}
      <button onClick={() => handleDeleteButton(person.id)}>Delete</button>
    </div>
  );
};
export default Persons;

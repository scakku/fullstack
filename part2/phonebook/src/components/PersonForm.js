import React from "react";

const PersonForm = (props) => {
  return (
    <div>
      <form onSubmit={props.addPerson}>
        <div>
          name:{" "}
          <input
            value={props.newName}
            onChange={(e) => props.setNewName(e.target.value)}
          />
        </div>
        <div>
          number:{" "}
          <input
            value={props.newNumber}
            onChange={(e) => props.setNewNumber(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  );
};

export default PersonForm;

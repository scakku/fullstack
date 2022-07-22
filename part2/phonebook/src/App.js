import { useState } from "react";
import Details from "./components/Details";

const App = (props) => {
  const [persons, setPersons] = useState(props.persons);
  const [newName, setNewName] = useState("");
  const [newNumber, setNumber] = useState();

  const addPerson = (e) => {
    e.preventDefault();
    if (persons.find(nameExists)) {
      alert(`${newName} "is already on phonebook"`);
    } else {
      const personDetails = {
        name: newName,
        number: newNumber,
        id: persons.length + 1,
      };
      setPersons(persons.concat(personDetails));
      setNewName("");
      setNumber("");
    }
  };

  const handlePersonChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNumber(event.target.value);
  };

  const nameExists = (exists) => {
    return exists.name.toUpperCase() === newName.toUpperCase();
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handlePersonChange} />
          <br />
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <>
        {persons.map((person) => (
          <Details person={person} key={person.id} number={person.number} />
        ))}
      </>
    </div>
  );
};

export default App;

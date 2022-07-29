import { useState, useEffect } from "react";
import axios from "axios";
import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNumber] = useState("");
  const [filterList, setFilter] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      console.log("promse fulfilled");
      setPersons(response.data);
    });
  }, []);
  // console.log("render", persons.length, "persons");

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
    return exists.name.toLowerCase() === newName.toLowerCase();
  };

  const handleFilter = (e) => {
    setFilter(e.target.value);
  };

  const filterName = persons.filter((person) =>
    person.name.toLowerCase().startsWith(filterList.toLowerCase())
  );

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleFilter={handleFilter} />
      <br />
      <h3>add a new</h3>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        newNumber={newNumber}
        handlePersonChange={handlePersonChange}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <>
        {filterName.map((person) => (
          <Persons person={person} key={person.id} number={person.number} />
        ))}
      </>
    </div>
  );
};

export default App;

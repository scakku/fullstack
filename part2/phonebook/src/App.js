import { useState, useEffect } from "react";
import personService from "./services/persons";
import Persons from "./components/Persons";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Notification from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterList, setFilterList] = useState("");
  const [render, setRender] = useState(false);
  const [message, setMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    personService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
      setRender(false);
    });
  }, [render]);

  const addPerson = (e, id) => {
    e.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    };
    const findPerson = persons.find(
      (person) => person.name.toLowerCase() === newName.toLowerCase()
    );

    if (findPerson) {
      const changedPerson = { ...findPerson, number: newNumber };
      if (
        window.confirm(
          `${newName} is already added to phonebook, replace the old number with a new one`
        )
      ) {
        personService
          .update(findPerson.id, changedPerson)
          .then((returnedPerson) => {
            setPersons(
              persons.map((person) =>
                person.id !== id ? person : returnedPerson
              )
            );
            setNewName("");
            setNewNumber("");
            setRender(true);
            setMessage(`${newName} number have been changed`);
            setTimeout(() => {
              setMessage(null);
            }, 3000);
          })
          .catch((error) => {
            setErrorMessage(
              `Information of ${newName} has already been removed from server`
            );
            setTimeout(() => {
              setErrorMessage(null);
            }, 3000);
            setRender(true);
          });
      } else {
        return;
      }
    } else {
      personService.create(personObject).then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson));
        setNewName("");
        setNewNumber("");
        setMessage(`Added ${newName}`);
        setTimeout(() => {
          setMessage(null);
        }, 2000);
      });
    }
  };

  const personsToShow = filterList
    ? persons.filter((person) =>
        person.name.toLowerCase().startsWith(filterList.toLowerCase())
      )
    : persons;

  const handleDeleteButton = (id) => {
    const findPerson = persons.find((n) => n.id === id);
    if (window.confirm(`Delete ${findPerson.name}?`)) {
      personService.deleteObject(findPerson.id).then(() => {
        setPersons(persons.filter((person) => person.id !== id));
      });
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} errorMessage={errorMessage} />
      <Filter filterList={filterList} setFilterList={setFilterList} />
      <h2>add a new</h2>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        newNumber={newNumber}
        setNewName={setNewName}
        setNewNumber={setNewNumber}
      />
      <h2>Numbers</h2>
      <div>
        {personsToShow.map((person) => (
          <Persons
            key={person.id}
            person={person}
            handleDeleteButton={handleDeleteButton}
          />
        ))}
      </div>
    </div>
  );
};

export default App;

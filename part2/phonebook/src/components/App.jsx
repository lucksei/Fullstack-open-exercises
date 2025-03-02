import { useState } from "react";

import PersonList from "./PersonList.jsx";
import AddPersonForm from "./AddPersonForm.jsx";
import FilterForm from "./FilterForm.jsx";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterName, setFilterName] = useState("");

  return (
    <div>
      <h2>Phonebook</h2>
      <FilterForm filterName={filterName} setFilterName={setFilterName} />
      <h2>Add a new</h2>
      <AddPersonForm
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
        persons={persons}
        setPersons={setPersons}
      />
      <h2>Numbers</h2>
      <PersonList persons={persons} filterName={filterName} />
    </div>
  );
};

export default App;

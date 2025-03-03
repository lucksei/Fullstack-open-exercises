import { useEffect, useState } from "react";

import PersonList from "./PersonList.jsx";
import AddPersonForm from "./AddPersonForm.jsx";
import FilterForm from "./FilterForm.jsx";
import Notification from "./Notification.jsx";

import personServices from "./../services/persons.jsx";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterName, setFilterName] = useState("");
  const [notification, SetNotification] = useState({
    messageText: null,
    statusType: "info",
  });

  useEffect(() => {
    personServices.getAllPersons().then((persons) => setPersons(persons));
  }, []); // Calls the api once ("[]")

  const handleNotification = (messageText, statusType) => {
    SetNotification({
      messageText,
      statusType,
    });

    setTimeout(() => {
      SetNotification({
        messageText: null,
        statusType: "info",
      });
    }, 2000);
  };

  return (
    <div>
      <Notification
        messageText={notification.messageText}
        statusType={notification.statusType}
      />
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
        handleNotification={handleNotification}
      />
      <h2>Numbers</h2>
      <PersonList
        persons={persons}
        setPersons={setPersons}
        filterName={filterName}
        handleNotification={handleNotification}
      />
    </div>
  );
};

export default App;

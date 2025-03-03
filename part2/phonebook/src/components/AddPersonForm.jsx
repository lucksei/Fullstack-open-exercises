import personServices from "./../services/persons.jsx";

const AddPersonForm = ({
  newName,
  setNewName,
  newNumber,
  setNewNumber,
  persons,
  setPersons,
  handleNotification,
}) => {
  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleAddPerson = (event) => {
    event.preventDefault();
    let personObject = {
      name: newName,
      number: newNumber,
      id: String(persons.length + 1),
    };

    // Check if the person's name is unique
    const oldUser = persons.find((p) => p.name === newName);
    const isUnique = oldUser === undefined ? true : false;

    // If is not unique replace
    if (!isUnique) {
      personObject = { ...personObject, id: oldUser.id };
      const msg = `${oldUser.name} is already added to phonebook. replace the old number with a new one`;
      if (!window.confirm(msg)) return;
      // REST PUT to update the person
      personServices.updatePerson(oldUser.id, personObject).then(() => {
        setPersons(
          persons.map((p) => (p.id === oldUser.id ? personObject : p))
        );
        handleNotification(`Updated ${personObject.name}`, "info");
      });
    } else {
      // Request creation in the backend
      personServices.createPerson(personObject).then((person) => {
        setPersons(persons.concat(person));
        handleNotification(`Added ${personObject.name}`, "info");
      });
    }

    setNewName("");
    setNewNumber("");
  };

  return (
    <form>
      <div>
        name: <input value={newName} onChange={handleNameChange} />
      </div>
      <div>
        number: <input value={newNumber} onChange={handleNumberChange} />
      </div>
      <div>
        <button type="submit" onClick={handleAddPerson}>
          add
        </button>
      </div>
    </form>
  );
};

export default AddPersonForm;

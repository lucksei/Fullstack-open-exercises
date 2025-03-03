import personServices from "./../services/persons.jsx";

const DeleteButton = ({ id, handleDeletePerson }) => {
  return (
    <button type="submit" onClick={() => handleDeletePerson(id)}>
      delete
    </button>
  );
};

const PersonListItem = ({ person, handleDeletePerson }) => {
  return (
    <div>
      <span>{person.name}</span>
      <span>, </span>
      <span>{person.number}</span>
      <span>; </span>
      <DeleteButton id={person.id} handleDeletePerson={handleDeletePerson} />
    </div>
  );
};

const PersonList = ({
  persons,
  setPersons,
  filterName,
  handleNotification,
}) => {
  const personsFiltered = persons.filter((person) => {
    const idxFound = person.name
      .toLowerCase()
      .indexOf(filterName.toLowerCase(), 0);
    return idxFound !== -1 ? true : false;
  });

  const handleDeletePerson = (id) => {
    // Confirm for person deletion
    const personName = persons.find((p) => p.id === id).name;
    if (window.confirm(`Delete ${personName}`)) {
      // Calling REST interface for deletion
      personServices
        .deletePerson(id)
        .then(() => {
          setPersons(persons.filter((p) => p.id !== id));
          handleNotification(`Deleted ${personName}`, "info");
        })
        .catch((error) => {
          if (error.response?.status === 404) {
            console.log("enters the switch case 404");
            handleNotification(
              `Error deleting ${personName}, does not exist`,
              "error"
            );
          } else {
            handleNotification(`Error deleting ${personName}`, "error");
          }
        });
    }
  };

  return (
    <>
      {personsFiltered.map((person) => (
        <PersonListItem
          key={person.id}
          person={person}
          handleDeletePerson={handleDeletePerson}
        />
      ))}
    </>
  );
};

export default PersonList;

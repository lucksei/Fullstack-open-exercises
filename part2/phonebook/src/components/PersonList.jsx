const PersonListItem = ({ person }) => {
  return (
    <div>
      <span>{person.name}</span>
      <span>, </span>
      <span>{person.number}</span>
    </div>
  );
};

const PersonList = ({ persons, filterName }) => {
  const personsFiltered = persons.filter((person) => {
    const idxFound = person.name
      .toLowerCase()
      .indexOf(filterName.toLowerCase(), 0);
    return idxFound !== -1 ? true : false;
  });

  return (
    <>
      {personsFiltered.map((person) => (
        <PersonListItem key={person.id} person={person} />
      ))}
    </>
  );
};

export default PersonList;

const FilterForm = ({ filterName, setFilterName }) => {
  const handleFilterNameChange = (event) => {
    setFilterName(event.target.value);
  };

  return (
    <form>
      <div>
        filter shown with:{" "}
        <input value={filterName} onChange={handleFilterNameChange} />
      </div>
    </form>
  );
};

export default FilterForm;

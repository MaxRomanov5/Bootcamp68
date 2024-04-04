const SerchForm = ({ searchQwery, setSearchQwery, onClick }) => {
  return (
    <div>
      <input
        type="number"
        name="id"
        value={searchQwery}
        onChange={(e) => {
          e.preventDefault();
          setSearchQwery(e.target.value);
        }}
      />
      <button type="button" onClick={onClick}>
        Search
      </button>
    </div>
  );
};

export default SerchForm;

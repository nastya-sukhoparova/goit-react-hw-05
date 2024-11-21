const SearchForm = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const query = e.target.elements.query.value.trim();
    if (query) {
      onSubmit(query);
      e.target.reset();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="query" placeholder="Search movies..." />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;

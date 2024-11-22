import { useSearchParams } from "react-router-dom";

function MoviesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") || "";

  const handleSearch = (searchQuery) => {
    setSearchParams({ query: searchQuery });
  };

  useEffect(() => {
    if (query) {
    }
  }, [query]);

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {}
    </div>
  );
}

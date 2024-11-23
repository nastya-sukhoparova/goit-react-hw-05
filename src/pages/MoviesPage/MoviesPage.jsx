import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchMoviesByQuery } from "../../services/api";
import MovieList from "../../components/MovieList/MovieList";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") || "";

  useEffect(() => {
    if (!query) return;

    const fetchMovies = async () => {
      try {
        const results = await fetchMoviesByQuery(query);
        setMovies(results);
      } catch (error) {
        console.error("Error fetching movies:", error.message);
      }
    };

    fetchMovies();
  }, [query]);

  const handleSearch = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const searchQuery = form.elements.query.value.trim();

    if (!searchQuery) {
      setSearchParams({});
      return;
    }

    setSearchParams({ query: searchQuery });
    form.reset();
  };

  return (
    <div>
      <h1>Search Movies</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          name="query"
          placeholder="Enter movie name"
          defaultValue={query}
        />
        <button type="submit">Search</button>
      </form>

      {movies.length > 0 ? (
        <MovieList movies={movies} />
      ) : (
        <p>No movies found.</p>
      )}
    </div>
  );
};

export default MoviesPage;

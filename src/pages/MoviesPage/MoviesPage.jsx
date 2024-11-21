import { useEffect, useState } from "react";
import { fetchMoviesByQuery } from "../../services/api";
import MovieList from "../../components/MovieList/MovieList";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (query) {
      const fetchMovies = async () => {
        const moviesData = await fetchMoviesByQuery(query);
        setMovies(moviesData);
      };
      fetchMovies();
    }
  }, [query]); // Перезапуск при зміні query

  return (
    <main>
      <h1>Movies</h1>
      <input
        type="text"
        placeholder="Search for a movie"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {movies.length > 0 && <MovieList movies={movies} />}
    </main>
  );
};

export default MoviesPage;

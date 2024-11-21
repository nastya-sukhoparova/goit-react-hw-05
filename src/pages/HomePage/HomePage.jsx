import { useEffect, useState } from "react";
import { fetchPopularMovies } from "../..//services/api";
import MovieList from "../../components/MovieList/MovieList";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const moviesData = await fetchPopularMovies();
      setMovies(moviesData);
    };
    fetchMovies();
  }, []);

  return (
    <main>
      <h1>Trending Movies</h1>
      {movies.length > 0 && <MovieList movies={movies} />}
    </main>
  );
};

export default HomePage;

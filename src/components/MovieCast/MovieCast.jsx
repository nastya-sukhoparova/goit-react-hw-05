import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCast } from "../../services/api";
import css from "./MovieCast.module.css";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchMovieCast(movieId).then(setCast);
  }, [movieId]);

  return (
    <ul className={css.list}>
      {cast.map(({ id, name, profile_path }) => (
        <li key={id} className={css.item}>
          <img
            src={`https://image.tmdb.org/t/p/w200/${profile_path}`}
            alt={name}
          />
          <p>{name}</p>
        </li>
      ))}
    </ul>
  );
};

export default MovieCast;

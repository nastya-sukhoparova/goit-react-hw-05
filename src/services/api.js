import axios from "axios";

const API_KEY = "194f6b714220c94a526c3d11b472eacc";
const BASE_URL = "https://api.themoviedb.org/3";

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
});

export const fetchPopularMovies = async () => {
  const { data } = await instance.get("/trending/movie/day");
  return data.results;
};

export const fetchMoviesByQuery = async (query) => {
  const { data } = await instance.get("/search/movie", { params: { query } });
  return data.results;
};

export const fetchMovieDetails = async (id) => {
  const { data } = await instance.get(`/movie/${id}`);
  return data;
};

export const fetchMovieCast = async (id) => {
  const { data } = await instance.get(`/movie/${id}/credits`);
  return data.cast;
};

export const fetchMovieReviews = async (id) => {
  const { data } = await instance.get(`/movie/${id}/reviews`);
  return data.results;
};

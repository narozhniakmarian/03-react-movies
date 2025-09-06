import axios from "axios";
import type { Movie } from "../types/movie";

const myKey = import.meta.env.VITE_API_KEY;


const BASE_URl='https://api.themoviedb.org/3/search/movie';

async function fetchMovies(query: string): Promise<Movie[]> {
    const response = await axios.get<{ results: Movie[] }>(
    BASE_URl,
    {
      params: { query },
      headers: {
        Authorization: `Bearer ${myKey}`,
      },
    }
  );
    return response.data.results;
}

export default fetchMovies;
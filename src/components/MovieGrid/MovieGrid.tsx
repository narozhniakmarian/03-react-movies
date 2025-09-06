import type { Movie } from "../../types/movie";
import MovieImage from "../MovieImage/MovieImage";
import styles from "./MovieGrid.module.css";
interface Props {
  movies: Movie[];
  onSelect: (movie: Movie) => void;
}

export default function MovieGrid({ movies, onSelect }: Props) {
  return (
    <ul className={styles.grid}>
      {movies.map((movie) => (
        <li key={movie.id}>
          <div className={styles.card} onClick={() => onSelect(movie)}>
            <MovieImage
              posterPath={movie.backdrop_path}
              title={movie.title}
              variant="grid"
            />
            <h2 className={styles.title}>{movie.title}</h2>
          </div>
        </li>
      ))}
    </ul>
  );
}

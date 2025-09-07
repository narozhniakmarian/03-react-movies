import { useEffect } from "react";
import type { Movie } from "../../types/movie";
import styles from "./MovieModal.module.css";
import { createPortal } from "react-dom";
import MovieImage from "../MovieImage/MovieImage";
import ReactStars from "react-stars";

interface MovieModalProps {
  movie: Movie;
  onClose: () => void;
}

export default function MovieModal({ movie, onClose }: MovieModalProps) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return createPortal(
    <div
      className={styles.backdrop}
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className={styles.modal}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          className={styles.closeButton}
          aria-label="Close modal"
          onClick={onClose}
        >
          &times;
        </button>

        <MovieImage
          imagePath={movie.backdrop_path}
          title={movie.title}
          variant="modal"
        />

        <div className={styles.content}>
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>

          <p>
            <strong>Release Date:</strong> {movie.release_date}
          </p>

          <div className={styles.recing}>
            <strong>Rating:</strong>
            <ReactStars
              count={10}
              value={movie.vote_average}
              size={24}
              color2={"#f0ab08ff"}
              edit={false}
            />
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}

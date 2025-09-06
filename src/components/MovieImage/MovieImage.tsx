import styles from "./MovieImage.module.css";
interface Props {
  posterPath: string | null;
  title: string;
  variant: "grid" | "modal";
}

export default function MovieImage({ posterPath, title, variant }: Props) {
  const fallbackSrc = "/icons_413470.svg";
  const src = posterPath
    ? `https://image.tmdb.org/t/p/w500${posterPath}`
    : fallbackSrc;
  const imageClass = variant === "modal" ? styles.modalImage : styles.gridImage;
  return (
    <img
      className={imageClass}
      src={src}
      alt={title}
      loading="lazy"
      onError={(e) => {
        e.currentTarget.src = fallbackSrc;
      }}
    />
  );
}

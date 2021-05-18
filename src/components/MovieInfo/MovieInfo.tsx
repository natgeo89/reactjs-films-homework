import React from 'react';
import Rating from '../Rating';
import styles from './MovieInfo.scss';

interface MovieInfoProps {
  title: string;
  genres: Array<{ id: number; name: string }>;
  runtime: number;
  rating: number;
}

const MovieInfo: React.FC<MovieInfoProps> = (props: MovieInfoProps) => {
  const { title, genres, runtime, rating } = props;

  const hourDuration = (runtime / 60);
  const hour = Math.trunc(hourDuration);
  const min = (hourDuration - hour) * 60;

  return (
    <div className={styles.container}>
      <span className={styles.title}>{title}</span>
      <div className={styles.flex_container}>
        <ul className={styles.genres}>
          {genres.map(({ name }) => (
            <li>{name}</li>
          ))}
        </ul>
        <span>|</span>
        <span>{`${hour}h ${min}m`}</span>
      </div>
      <Rating rating={rating} />
    </div>
  );
};
export default MovieInfo;

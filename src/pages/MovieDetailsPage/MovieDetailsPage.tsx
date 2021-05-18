import React from 'react';
import MovieInfo from '../../components/MovieInfo';
import Button from '../../components/Button';
import styles from './MovieDetailsPage.scss';
import btnStyles from '../../components/Button/Button.scss';

import { movieInfoResponseStubI } from '../../stubs/stubs';

interface MovieDetailsPageProps {
  movieInfo: movieInfoResponseStubI;
}

const MovieDetailsPage: React.FC<MovieDetailsPageProps> = (
  { movieInfo }: MovieDetailsPageProps,
) => {
  const { backdrop_path: img, title, genres, runtime, vote_average: rating } = movieInfo;

  const movieStyle = {
    backgroundImage: `url(${img})`,
  };

  return (
    <>
      <div className={styles.movie_container} style={movieStyle}>
        <div className={styles.wrapper}>
          <MovieInfo title={title} genres={genres} runtime={runtime} rating={rating} />
          <div className={styles.buttons_container}>
            <Button onClick={() => { console.log('watch'); }} className={btnStyles.withBg}>Watch Now</Button>
            <Button onClick={() => { console.log('info'); }}>View Info</Button>
          </div>
        </div>
      </div>
    </>
  );
};
export default MovieDetailsPage;

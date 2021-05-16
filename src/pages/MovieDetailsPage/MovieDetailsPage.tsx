import React from 'react';
import MovieInfoContainer from '../../components/MovieInfoContainer';
import styles from './MovieDetailsPage.scss';

import { movieInfoResponseStubI } from '../../stubs/stubs';

interface MovieDetailsPageProps {
  movieInfo: movieInfoResponseStubI;
}

const MovieDetailsPage: React.FC<MovieDetailsPageProps> = (
  { movieInfo }: MovieDetailsPageProps,
) => {
  const {
    backdrop_path: img,
    title,
    genres,
    runtime,
    vote_average: rating,
  } = movieInfo;

  const movieStyle = {
    backgroundImage: `url(${img})`,
  };

  return (
    <>
      <div className={styles.movie_container} style={movieStyle}>
        <MovieInfoContainer title={title} genres={genres} runtime={runtime} rating={rating} />
        {/* <div></div> */}
      </div>
    </>
  );
};
export default MovieDetailsPage;

import React, { useState } from 'react';
import MovieInfo from '../../components/MovieInfo';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import VideoPlayer from '../../components/VideoPlayer';

import styles from './MovieDetailsPage.scss';

import { movieInfoResponseStubI } from '../../stubs/stubs';

interface MovieDetailsPageProps {
  movieInfo: movieInfoResponseStubI;
}

const MovieDetailsPage: React.FC<MovieDetailsPageProps> = (
  { movieInfo }: MovieDetailsPageProps,
) => {
  const { backdrop_path: img, title, genres, runtime, vote_average: rating, movieKey } = movieInfo;

  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const closeModal = () => {
    setIsVideoOpen(false);
  };

  const movieStyle = {
    backgroundImage: `url(${img})`,
  };

  return (
    <>
      {isVideoOpen && (
        <Modal onCancel={closeModal}>
          <VideoPlayer movieKey={movieKey} />
        </Modal>
      )}
      <div className={styles.movie_container} style={movieStyle}>
        <div className={styles.wrapper}>
          <MovieInfo title={title} genres={genres} runtime={runtime} rating={rating} />
          <div className={styles.buttons_container}>
            <Button
              onClick={() => {
                setIsVideoOpen(true);
              }}
              primary
            >
              Watch Now
            </Button>
            <Button
              onClick={() => {
                console.log('info');
              }}
            >
              View Info
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
export default MovieDetailsPage;

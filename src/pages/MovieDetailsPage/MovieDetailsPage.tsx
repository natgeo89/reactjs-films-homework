import React, { useState } from 'react';
import MovieInfo from '../../components/MovieInfo';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import TextBlock from '../../components/TextBlock';
import VideoPlayer from '../../components/VideoPlayer';

import styles from './MovieDetailsPage.scss';

import { movieInfoResponseStubI } from '../../stubs/stubs';

interface MovieDetailsPageProps {
  movieInfo: movieInfoResponseStubI;
}

const MovieDetailsPage: React.FC<MovieDetailsPageProps> = ({
  movieInfo,
}: MovieDetailsPageProps) => {
  const {
    backdrop_path: img,
    title,
    genres,
    runtime,
    vote_average: rating,
    movieKey,
    overview,
  } = movieInfo;

  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isOverviewOpen, setIsOverviewOpen] = useState(false);

  const closeModal = () => {
    setIsVideoOpen(false);
  };

  const openModal = () => {
    setIsVideoOpen(true);
  };

  const toggleOverview = () => {
    setIsOverviewOpen(!isOverviewOpen);
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
            {isOverviewOpen && <TextBlock>{overview}</TextBlock>}
            <Button onClick={openModal} primary>
              Watch Now
            </Button>
            <Button
              onClick={toggleOverview}
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

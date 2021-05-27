import React from 'react';
import styles from './VideoPlayer.scss';

interface VideoPlayerProps {
  movieKey: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ movieKey }) => (
  <div className={styles.container}>
    <iframe
      className={styles.video}
      src={`https://www.youtube.com/embed/${movieKey}?autoplay=0`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </div>
);

export default VideoPlayer;

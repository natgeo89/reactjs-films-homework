import React from 'react';
import styles from './TextBlock.scss';

interface MovieDescriptionProps {
  children: string;
}

const MovieDescription: React.FC<MovieDescriptionProps> = ({ children }) => (
  <div className={styles.div}>{children}</div>
);

export default MovieDescription;

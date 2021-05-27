import React from 'react';
import styles from './TextBlock.scss';

const MovieDescription: React.FC = ({ children }) => (
  <div className={styles.div}>{children}</div>
);

export default MovieDescription;

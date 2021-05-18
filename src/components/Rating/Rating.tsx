import React from 'react';
import styles from './Rating.scss';
import star from './img/star.svg';

interface RatingProps {
  rating: number;
}

const Rating: React.FC<RatingProps> = ({ rating }: RatingProps) => {
  const raitingRound = Math.round(rating);
  const starsList = Array.from(Array(raitingRound), (ind) => (
    <li>
      <img className={styles.star} src={star} key={ind} alt="star" />
    </li>
  ));

  return (
    <div className={styles.rating_container}>
      <ul className={styles.stars}>{starsList}</ul>
      <span className={styles.rating}>{rating}</span>
    </div>
  );
};
export default Rating;

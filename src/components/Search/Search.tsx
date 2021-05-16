import React from 'react';
import styles from './Search.scss';
import searchIcon from './img/search-icon.png';

const Search: React.FC = () => (
  <form>
    <input type="search" className={styles.search_field} placeholder="Type to search..." />
    <img src={searchIcon} className={styles.search_icon} alt="search" />
  </form>
);

export default Search;

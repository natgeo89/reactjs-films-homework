import React from 'react';
import Search from '../Search/Search';
import styles from './Header.scss';

const Header: React.FC = () => (
  <header className={styles.header}>
    <h1 className={styles.title}>films</h1>
    <Search />
  </header>
);

export default Header;

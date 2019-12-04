import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <NavLink
            exact
            to={routes.HOME}
            className={styles.link}
            activeClassName={styles.linkActive}
          >
            Home
          </NavLink>
        </li>

        <li className={styles.item}>
          <NavLink
            to={routes.MOVIES}
            className={styles.link}
            activeClassName={styles.linkActive}
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

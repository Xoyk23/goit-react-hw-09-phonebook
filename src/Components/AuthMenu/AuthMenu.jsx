import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';

import styles from './AuthMenu.module.css';

const AuthMenu = () => {
  return (
    <div className={styles.container}>
      <NavLink
        className={styles.link}
        activeClassName={styles.active}
        to={routes.register}
        exact
      >
        Register
      </NavLink>
      <NavLink
        className={styles.link}
        activeClassName={styles.active}
        to={routes.login}
        exact
      >
        Login
      </NavLink>
    </div>
  );
};

export default AuthMenu;

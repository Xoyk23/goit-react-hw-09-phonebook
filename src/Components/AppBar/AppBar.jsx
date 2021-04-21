import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import UserMenu from '../UserMenu';
import AuthMenu from '../AuthMenu';

import { getIsAuthenticated } from '../../redux/auth/auth-selectors';

import styles from './AppBar.module.css';
import routes from '../../routes';

const AppBar = ({ isAuthenticated }) => {
  return (
    <div className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li>
            <NavLink
              className={styles.link}
              activeClassName={styles.active}
              to={routes.home}
              exact
            >
              Home
            </NavLink>
          </li>
          {isAuthenticated && (
            <li className={styles.item}>
              <NavLink
                to={routes.contacts}
                className={styles.link}
                activeClassName={styles.active}
              >
                Contacts
              </NavLink>
            </li>
          )}
        </ul>
        {isAuthenticated ? <UserMenu /> : <AuthMenu />}
      </nav>
    </div>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: getIsAuthenticated(state),
});

export default connect(mapStateToProps)(AppBar);

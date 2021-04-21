import React from 'react';
import { connect } from 'react-redux';
import { logOutUser } from '../../redux/auth/auth-operations';

import { getUserName } from '../../redux/auth/auth-selectors';

import styles from './UserMenu.module.css';

import defaultAvatar from './defaultAvatar.png';

const UserMenu = ({ avatar, name, onLogout }) => {
  return (
    <div className={styles.container}>
      <img
        className={styles.avatar}
        src={avatar}
        alt=""
        width="32px"
        height="32px"
      />
      <p className={styles.userName}>{name}</p>
      <button type="button" onClick={onLogout} className={styles.button}>
        Logout
      </button>
    </div>
  );
};

const mapStateToProps = state => ({
  name: getUserName(state),
  avatar: defaultAvatar,
});
const mapDispatchToProps = {
  onLogout: logOutUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);

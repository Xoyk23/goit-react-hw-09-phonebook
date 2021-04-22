import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOutUser } from '../../redux/auth/auth-operations';

import { getUserName } from '../../redux/auth/auth-selectors';

import styles from './UserMenu.module.css';

import defaultAvatar from './defaultAvatar.png';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(getUserName);
  const onLogout = useCallback(() => {
    dispatch(logOutUser());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <img
        className={styles.avatar}
        src={defaultAvatar}
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
}

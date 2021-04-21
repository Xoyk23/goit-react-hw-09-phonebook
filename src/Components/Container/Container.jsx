import React from 'react';
import styles from './Container.module.css';

const Container = ({ children }) => (
  <div className={styles.MainCont}>
    <div className={styles.Container}>{children}</div>
  </div>
);

export default Container;

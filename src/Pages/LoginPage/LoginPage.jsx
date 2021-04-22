import React, { useState } from 'react';

import styles from './LoginPage.module.css';
import { loginUser } from '../../redux/auth/auth-operations';
import { useDispatch } from 'react-redux';

export default function LoginPage() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const heandleInput = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        console.warn(`Тип поля name - ${name} не обрабатывается!`);
        return;
    }
  };

  const heandleLoginUser = event => {
    event.preventDefault();
    dispatch(loginUser({ email, password }));

    setEmail('');
    setPassword('');
  };

  // const handleSubmit = e => {
  //   e.preventDefault();

  //   dispatch(authOperations.logIn({ email, password }));
  //   setEmail('');
  //   setPassword('');
  // };

  return (
    <form
      className={styles.form}
      autoComplete="off"
      onSubmit={heandleLoginUser}
    >
      <label className={styles.label}>
        Your email
        <input
          className={styles.input}
          name="email"
          type="email"
          placeholder="Funny email"
          value={email}
          onChange={heandleInput}
          required
        />
      </label>
      <label className={styles.label}>
        Password
        <input
          className={styles.input}
          name="password"
          type="password"
          placeholder="Stong password"
          value={password}
          onChange={heandleInput}
          required
        />
      </label>
      <button className={styles.button} type="submit">
        Login
      </button>
    </form>
  );
}

// const mapDispatchToProps = {
//   onLogin: loginUser,
// };

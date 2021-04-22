import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import styles from './RegisterPage.module.css';
import { registerUser } from '../../redux/auth/auth-operations';

export default function Register() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const heandleInput = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        console.warn(`Тип поля name - ${name} не обрабатывается!`);
        return;
    }
  };

  const heandleRegisterUser = event => {
    event.preventDefault();

    dispatch(registerUser({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <form
      className={styles.form}
      autoComplete="off"
      onSubmit={heandleRegisterUser}
    >
      <label className={styles.label}>
        Login
        <input
          className={styles.input}
          name="name"
          type="text"
          placeholder="Unreal name"
          value={name}
          onChange={heandleInput}
          required
        />
      </label>
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
          name="password"
          type="password"
          className={styles.input}
          placeholder="Stong password"
          value={password}
          onChange={heandleInput}
          required
        />
      </label>
      <button className={styles.button} type="submit">
        Register
      </button>
    </form>
  );
}

// const mapDispatchToProps = {
//   onRegister: registerUser,
// };

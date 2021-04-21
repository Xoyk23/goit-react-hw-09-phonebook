import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './RegisterPage.module.css';
import { registerUser } from '../../redux/auth/auth-operations';

class Register extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  heandleInput = event => {
    this.setState({ [event.currentTarget.name]: event.currentTarget.value });
  };

  heandleRegisterUser = event => {
    event.preventDefault();
    this.props.onRegister(this.state);
    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    return (
      <form
        className={styles.form}
        autoComplete="off"
        onSubmit={this.heandleRegisterUser}
      >
        <label className={styles.label}>
          Login
          <input
            className={styles.input}
            name="name"
            type="text"
            placeholder="Unreal name"
            value={this.state.name}
            onChange={this.heandleInput}
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
            value={this.state.email}
            onChange={this.heandleInput}
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
            value={this.state.password}
            onChange={this.heandleInput}
            required
          />
        </label>
        <button className={styles.button} type="submit">
          Register
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = {
  onRegister: registerUser,
};

export default connect(null, mapDispatchToProps)(Register);

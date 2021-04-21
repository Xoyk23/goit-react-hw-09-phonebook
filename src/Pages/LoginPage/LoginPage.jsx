import React, { Component } from 'react';

import { connect } from 'react-redux';

import styles from './LoginPage.module.css';
import { loginUser } from '../../redux/auth/auth-operations';

class LoginPage extends Component {
  state = {
    email: '',
    password: '',
  };

  heandleInput = event => {
    this.setState({ [event.currentTarget.name]: event.currentTarget.value });
  };

  heandleLoginUser = event => {
    event.preventDefault();
    this.props.onLogin(this.state);
    this.setState({ email: '', password: '' });
  };

  render() {
    return (
      <form
        className={styles.form}
        autoComplete="off"
        onSubmit={this.heandleLoginUser}
      >
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
            className={styles.input}
            name="password"
            type="password"
            placeholder="Stong password"
            value={this.state.password}
            onChange={this.heandleInput}
            required
          />
        </label>
        <button className={styles.button} type="submit">
          Login
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = {
  onLogin: loginUser,
};

export default connect(null, mapDispatchToProps)(LoginPage);

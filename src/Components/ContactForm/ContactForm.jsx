import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { addContact } from '../../redux/contactsItems/contacts-operations';

import { getContacts } from '../../redux/contactsItems/contacts-selectors';

import PropTypes from 'prop-types';

import styles from './ContactForm.module.css';

export default function ContactForm() {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getContacts);
  const onSubmit = (name, number) => dispatch(addContact(name, number));

  // heandleInput = e => {
  //   this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  // };

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        console.warn(`Тип поля name - ${name} не обрабатывается!`);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (name === '') {
      alert(`Please whrite all info`);
      return;
    }
    if (number === '') {
      alert(`Please whrite all info`);
      return;
    }
    if (contacts.find(item => item.name.toLowerCase() === name.toLowerCase())) {
      alert(`Contact is already in your contacts list`);
      return;
    }

    onSubmit(name, number);
    setName('');
    setNumber('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.label}>
        Name:
        <input
          className={styles.input}
          name="name"
          type="text"
          value={name}
          onChange={handleChange}
          required
        />
      </label>
      <label className={styles.label}>
        Phone number<span className={styles.example}>(000-00-00)</span>:
        <input
          className={styles.input}
          name="number"
          type="tel"
          pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
          value={number}
          onChange={handleChange}
          required
        />
      </label>
      <button className={styles.button} type="submit">
        Add Contact
      </button>
    </form>
  );
}

ContactForm.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  onSubmit: PropTypes.func,
};

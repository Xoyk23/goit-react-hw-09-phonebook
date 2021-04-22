import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import ContactForm from '../../Components/ContactForm';
import ContactsList from '../../Components/ContactsList';
import Filter from '../../Components/Filter';

import { fetchContacts } from '../../redux/contactsItems/contacts-operations';
// import { getContactsLengths } from '../redux/contactsItems/contacts-selectors';

import styles from './UserPage.module.css';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={styles.title}>Contacts</h2>
      <Filter />
      <ContactsList />
    </div>
  );
}

// const mapDispatchToProps = dispatch => ({
//   fetchContacts: () => dispatch(fetchContacts()),
// });

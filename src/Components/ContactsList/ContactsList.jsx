import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import PropTypes from 'prop-types';

import { deleteContact } from '../../redux/contactsItems/contacts-operations';

import { getFilteredContacts } from '../../redux/contactsItems/contacts-selectors';

import ContactsItem from './ContactItem';

import styles from './ContactsList.module.css';

export default function ContactsList() {
  const dispatch = useDispatch();
  const contacts = useSelector(getFilteredContacts);
  const deleteOnClick = id => dispatch(deleteContact(id));

  return (
    <ul className={styles.list}>
      {contacts.map(({ id, name, number }) => (
        <ContactsItem
          key={id}
          name={name}
          number={number}
          id={id}
          deleteOnClick={() => deleteOnClick(id)}
        />
      ))}
    </ul>
  );
}

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  deleteOnClick: PropTypes.func,
};

// const mapStateToProps = state => ({
//   contacts: getFilteredContacts(state),
// });

// const mapDispatchToProps = dispatch => ({
//   deleteOnClick: e => dispatch(deleteContact(e.target.id)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);

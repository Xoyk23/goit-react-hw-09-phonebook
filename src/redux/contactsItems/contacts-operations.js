import axios from 'axios';

import {
  fetchContactRequest,
  fetchContactSucces,
  fetchContactError,
  addContactRequest,
  addContactSucces,
  addContactError,
  deleteContactRequest,
  deleteContactSucces,
  deleteContactError,
} from './contacts-actions';

// axios.defaults.baseURL = 'http://localhost:4040';

const fetchContacts = () => async dispatch => {
  dispatch(fetchContactRequest());

  axios
    .get('/contacts')
    .then(({ data }) => dispatch(fetchContactSucces(data)))
    .catch(error => dispatch(fetchContactError(error)));
};

const addContact = (name, number) => async dispatch => {
  const contact = {
    name,
    number,
  };

  dispatch(addContactRequest());

  axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(addContactSucces(data)))
    .catch(error => dispatch(addContactError(error)));
};

const deleteContact = contactId => async dispatch => {
  dispatch(deleteContactRequest());

  axios
    .delete(`/contacts/${contactId}`)
    .then(({ data }) => dispatch(deleteContactSucces(contactId)))
    .catch(error => dispatch(deleteContactError(error)));
};

export { fetchContacts, addContact, deleteContact };

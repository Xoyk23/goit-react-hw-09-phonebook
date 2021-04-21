import { createAction } from '@reduxjs/toolkit';

const fetchContactRequest = createAction('contacts/fetchRequest');
const fetchContactSucces = createAction('contacts/fetchSucces');
const fetchContactError = createAction('contacts/fetchError');

const addContactRequest = createAction('contacts/createRequest');
const addContactSucces = createAction('contacts/createSucces');
const addContactError = createAction('contacts/createError');

const deleteContactRequest = createAction('contacts/deleteRequest');
const deleteContactSucces = createAction('contacts/deleteSucces');
const deleteContactError = createAction('contacts/deleteError');

export {
  fetchContactRequest,
  fetchContactSucces,
  fetchContactError,
  addContactRequest,
  addContactSucces,
  addContactError,
  deleteContactRequest,
  deleteContactSucces,
  deleteContactError,
};

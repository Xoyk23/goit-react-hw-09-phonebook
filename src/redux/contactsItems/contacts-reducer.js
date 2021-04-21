import { createReducer } from '@reduxjs/toolkit';
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

const contactsReducer = createReducer([], {
  [fetchContactSucces]: (_, { payload }) => [...payload],
  [addContactSucces]: (state, { payload }) => [...state, payload],
  [deleteContactSucces]: (state, { payload }) => [
    ...state.filter(contact => contact.id !== payload),
  ],
});

const loadingReducer = createReducer(false, {
  [fetchContactRequest]: () => true,
  [fetchContactSucces]: () => false,
  [fetchContactError]: () => false,
  [addContactRequest]: () => true,
  [addContactSucces]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSucces]: () => false,
  [deleteContactError]: () => false,
});

const errorReducer = createReducer(null, {
  [fetchContactError]: error => error,
  [addContactError]: error => error,
  [deleteContactError]: error => error,
});

export { contactsReducer, loadingReducer, errorReducer };

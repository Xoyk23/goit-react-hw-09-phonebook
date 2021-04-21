import { configureStore } from '@reduxjs/toolkit';

import { middleware, persistStore, persistReducer } from './middleware';

import { contactsReducer } from './contactsItems/contacts-reducer';

import { filterReducer } from './filter/filter-reducer';
import authPersistConfig from './auth/auth-persist-config';
import authReducer from './auth/auth-reducer';

const reducer = {
  auth: persistReducer(authPersistConfig, authReducer),
  contacts: contactsReducer,
  filter: filterReducer,
};

const store = configureStore({
  reducer,
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

// /* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export { store, persistor };

import storage from 'redux-persist/lib/storage';

// Cохраняет токен в локал сторедж

const authPersistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};

export default authPersistConfig;

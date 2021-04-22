const getIsAuthenticated = state => state.auth.isAuthenticated;

// const getIsAuthenticated = state => state.auth.token;

const getUserName = state => state.auth.user.name;
const getToken = state => state.auth.token;

export { getIsAuthenticated, getUserName, getToken };

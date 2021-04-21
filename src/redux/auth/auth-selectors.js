const getIsAuthenticated = state => state.auth.isAuthenticated;

// const getIsAuthenticated = state => state.auth.token;

const getUserName = state => state.auth.user.name;

export { getIsAuthenticated, getUserName };

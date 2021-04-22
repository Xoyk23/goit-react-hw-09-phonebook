import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import authSelectors from '../redux/auth/auth-selectors';
import { getToken } from '../../redux/auth/auth-selectors';

/**
 * - Если маршрут ограниченный, и пользователь залогинен, рендерит редирект на /contacts
 * - В противном случае рендерит компонент
 */
export default function PublicRoute({ redirectTo, children, ...routeProps }) {
  const token = useSelector(getToken);

  return (
    <Route {...routeProps}>
      {token && routeProps.restricted ? <Redirect to={redirectTo} /> : children}
    </Route>
  );
}

// import { getIsAuthenticated } from '../../redux/auth/auth-selectors';

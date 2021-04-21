import React, { Component, Suspense, lazy } from 'react';
import { Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import routes from './routes';
import { getCurrentUser } from './redux/auth/auth-operations';

import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import PublicRoute from './Components/PublicRoute';
import AppBar from './Components/AppBar';
import Container from './Components/Container';
// import Loading from './Components/Loading';

const HomePage = lazy(() => import('./Pages/HomePage'));
const UserPage = lazy(() => import('./Pages/UserPage'));
const LoginPage = lazy(() => import('./Pages/LoginPage'));
const RegisterPage = lazy(() => import('./Pages/RegisterPage'));

class App extends Component {
  state = {};

  componentDidMount() {
    this.props.getCurrentUser();
  }

  render() {
    return (
      <>
        <AppBar />
        <Container>
          <Suspense fallback={<p>Грузится...</p>}>
            <Switch>
              <PublicRoute exact path={routes.home} component={HomePage} />
              <PrivateRoute
                path={routes.contacts}
                component={UserPage}
                redirectTo={routes.login}
              />
              <PublicRoute
                path={routes.login}
                restricted
                component={LoginPage}
                redirectTo={routes.contacts}
              />
              <PublicRoute
                path={routes.register}
                restricted
                component={RegisterPage}
                redirectTo={routes.contacts}
              />
              <Redirect to={routes.home} />
            </Switch>
          </Suspense>
          {/* <Loading /> */}
        </Container>
      </>
    );
  }
}

const mapDispatchToProps = {
  getCurrentUser: getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);

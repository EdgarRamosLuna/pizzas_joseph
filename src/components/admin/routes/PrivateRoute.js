import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// Este componente se encargará de proteger las rutas que se le indiquen
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem('isLoggedIn') ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

export default PrivateRoute;
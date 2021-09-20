import React from 'react';
import { Redirect, Route } from 'react-router';
import GeneralLayout from '../layouts/GeneralLayout';

const ProtectedRoute = ({ component: Component, user, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      if (user !== undefined && user !== null && user !== 'null') {
        return (
          <GeneralLayout>
            <Component {...props} />
          </GeneralLayout>
        );
      } else {
        return (
          <Redirect
            to={{
              pathname: '/login',
              state: {
                from: props.location,
              },
            }}
          />
        );
      }
    }}
  />
);

export default ProtectedRoute;

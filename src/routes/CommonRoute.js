import React from 'react';
import { Route } from 'react-router';

const CommonRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => <Component {...props} />} />
);

export default CommonRoute;

/* AuthLayout will be used for routes or pages that will
  be displayed before the login of the user. */

import React, { Fragment } from 'react';
import AuthHeader from '../../components/AuthHeader';
import Footer from '../../components/Footer';
import './AuthLayout.scss';

const AuthLayout = ({ children }) => {
  return (
    <Fragment>
      <AuthHeader />
      {children}
      <Footer />
    </Fragment>
  );
};

export default AuthLayout;

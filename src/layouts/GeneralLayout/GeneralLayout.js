/* GeneralLayout will be used for routes or pages that will
  be displayed after the successfull login of the user. */

import React, { Fragment } from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import './GeneralLayout.scss';

const GeneralLayout = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <div>{children}</div>
      <Footer />
    </Fragment>
  );
};

export default GeneralLayout;

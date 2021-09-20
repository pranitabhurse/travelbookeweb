import React from 'react';
import { BrowserRouter, Redirect, Switch, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import cookie from 'react-cookies';
import io from 'socket.io-client';

// Importing Styles
import 'antd/dist/antd.css';
import './assets/scss/styles.scss';

// Importing Routes
import AuthRoute from './routes/AuthRoute';
import ProtectedRoute from './routes/ProtectedRoute';
import CommonRoute from './routes/CommonRoute';
import { authRoutes, protectedRoutes, commonRoutes } from './routes';

// Importing Reducers
import { deleteUser } from './redux/reducers/userSlice';

// Initializing Socket
export const socket = io.connect('http://3.108.14.230:3334');

export default function App() {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.user);

  if (user === undefined || user === null || user === 'null') {
    dispatch(deleteUser(null));
    cookie.save('user', null);
  }

  return (
    <BrowserRouter>
      <Switch>
        {authRoutes.map((item) => (
          <AuthRoute
            key={item.id}
            exact={true}
            path={item.path}
            component={item.component}
            user={user}
          />
        ))}

        {protectedRoutes.map((item) => (
          <ProtectedRoute
            key={item.id}
            exact={true}
            path={item.path}
            component={item.component}
            user={{}}
          />
        ))}

        {commonRoutes.map((item) => (
          <CommonRoute
            key={item.id}
            exact={true}
            path={item.path}
            component={item.component}
            user={user}
          />
        ))}

        <Route
          exact={true}
          path='/'
          render={(props) => (
            <Redirect
              to={{
                pathname: '/home',
                state: {
                  from: props.location,
                },
              }}
            />
          )}
        />
      </Switch>
    </BrowserRouter>
  );
}

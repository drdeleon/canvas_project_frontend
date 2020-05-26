import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { configureStore } from '../../store';
import {
  Router,
  Route, 
  Switch,
  Redirect,
} from 'react-router-dom';


import NavBar from '../NavBar';
import LogIn from '../Login';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

const { store, persistor } = configureStore(); 

const App = () => (
  <Provider store={store}>
    <Router history={history}>
      <PersistGate loading={null} persistor={persistor}>
        <Switch>
            <Redirect exact from='/' to='/login' />
            <Route exact path='/login' component={LogIn} />
            <Route exact path='/others' component={NavBar} />
        </Switch>
      </PersistGate>
    </Router>
  </Provider>
);


export default App;

import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { createBrowserHistory } from 'history';

import { configureStore } from '../../store';
import {
  Router,
  Route, 
  Switch,
  Redirect,
} from 'react-router-dom';

import LogIn from '../../screens/Login';
import AssignmentsList from '../AssignmentsList';
import NewAssignmentForm from '../NewAssignmentForm';

import Account from '../../screens/Account';
import Dashboard from '../../screens/Dashboard';
import Courses from '../../screens/Courses';
import UserType from '../../screens/UserType';
import Course from '../../screens/Course';

export const history = createBrowserHistory();

const { store, persistor } = configureStore(); 

const App = () => (
  <Provider store={store}>
    <Router history={history}>
      <PersistGate loading={null} persistor={persistor}>
        <Switch>
            <Redirect exact from='/' to='/login' />
            <Route exact path='/login' component={LogIn} />
            <Route exact path='/user-type' component={UserType} />
            <Route exact path='/account' component={Account} />
            <Route exact path='/courses' component={Courses} />
            <Route path='/courses/:id' component={Course} />
            <Route exact path='/dashboard' component={Dashboard} />
            <Route exact path='/assignments' component={AssignmentsList} />
            <Route exact path='/new-assignment' component={NewAssignmentForm} />
        </Switch>
      </PersistGate>
    </Router>
  </Provider>
);


export default App;

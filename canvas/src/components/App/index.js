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
import CoursesScreen from '../../screens/CoursesScreen';
import UserType from '../../screens/UserType';
import CourseScreen from '../../screens/CourseScreen';
import CourseGroupsScreen from '../../screens/CourseGroupsScreen';
import CourseAnnouncementsScreen from '../../screens/CourseAnnouncementsScreen';
import CourseAssignmentsScreen from '../../screens/CourseAssignmentsScreen';

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
            <Route exact path='/courses' component={CoursesScreen} />
            <Route exact path='/courses/:id' component={CourseScreen} />
            <Route path='/courses/:id/groups' component={CourseGroupsScreen} />
            <Route path='/courses/:id/announcements' component={CourseAnnouncementsScreen} />
            <Route path='/courses/:id/assignments' component={CourseAssignmentsScreen} />
            <Route exact path='/dashboard' component={Dashboard} />
            <Route exact path='/assignments' component={AssignmentsList} />
            <Route exact path='/new-assignment' component={NewAssignmentForm} />
        </Switch>
      </PersistGate>
    </Router>
  </Provider>
);


export default App;

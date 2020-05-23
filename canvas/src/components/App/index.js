import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { configureStore } from '../../store';

import Test from '../Test';


const { store, persistor } = configureStore();

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
        <Test/>
    </PersistGate>
  </Provider>
);


export default App;

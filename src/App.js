import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './Redux/Store';
import Route from './routes';

class App extends Component {
 
  render() {
    return (
      <Provider store = {store}>
        <PersistGate loading={null} persistor={persistor}>
          <Route/>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;

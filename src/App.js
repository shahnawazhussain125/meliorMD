import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './Redux/Store';
import Header from './Components/Header';
import Route from './routes';
import Footer from './Components/Footer';


class App extends Component {
  render() {
    return (
      <Provider store = {store}>
        <PersistGate loading={null} persistor={persistor}>
          {/* <Header/> */}
          <Route/>
          <Footer/>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;

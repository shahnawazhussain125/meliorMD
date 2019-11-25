import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './Redux/Store';
import Header from './Components/Header';
import Route from './routes';
import Footer from './Components/Footer';
import Search from 'antd/lib/input/Search';
import Login from './Components/Login';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    }
  }

  // authListener() {
  //   fire.auth().onAuthStateChanged((user) => {
  //     if (user) {
  //       this.setState({user});
  //     }
  //     else {
  //       this.setState({user: null})
  //     }
  //   });
  // }

  render() {
    return (
      <Provider store = {store}>
        <PersistGate loading={null} persistor={persistor}>
         
          <Route/>
          <Footer/>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;

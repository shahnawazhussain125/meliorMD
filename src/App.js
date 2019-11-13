import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './Redux/Store';
import fire from './Authentication/fire'
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
  componentDidMount(){
    this.authListener();
  }
  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({user});
      }
      else {
        this.setState({user: null})
      }
    });
  }
  render() {
    return (
      // <div className="App">
      //   {this.state.user ? (<Search/>) : <Login/>}
      // </div>
      <Provider store = {store}>
        <PersistGate loading={null} persistor={persistor}>
          <Header/>
          <Route/>
          <Footer/>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;

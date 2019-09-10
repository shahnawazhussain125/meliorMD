import React, { Component } from 'react';
import Header from './Components/Header';
import Route from './routes';
import Footer from './Components/Footer';


class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Route/>
        <Footer/>
      </div>
    );
  }
}

export default App;

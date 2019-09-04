import React from 'react';
import Header from './Components/Header';
import ProviderList from './Pages/ProviderList';
// import Footer from './Components/Footer';
import SearchResult from './Components/SearchResult';
import Search from './Components/Search';

function App() {
  return (
    <div>
      <Header/>
      {/* <ProviderList/> */}
      {/* <Footer/> */}
      {
        <SearchResult/>
      }
      {/* <Search/> */}
    </div>
  );
}

export default App;

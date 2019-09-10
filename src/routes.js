import React from 'react'; 
import {  BrowserRouter, Route, Switch } from 'react-router-dom';
import ProviderList from './Pages/ProviderList';
import SearchResult from './Components/SearchResult';
import Search from './Components/Search';
import Profile from './Components/Profile';

const Routes = () =>{
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path = "/" component = { ProviderList } />
                <Route exact path = "/profile" component = { Profile } />
                <Route path = "/search" component = { Search } />
                <Route path = "/search_result" component = { SearchResult } />
                
                {/* <Route path = "/updateproduct/:id" component= {UpdateProduct} /> */}
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;
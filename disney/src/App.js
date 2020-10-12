import React, {useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// import Nav from './Components/Nav';
import Home from './Components/home';
import About from "./Components/about";
import Profile from './Components/profile';
import SearchBar from './Components/searchBar';
import Compare from './Components/compare';

function App() {

      const [city, setCity] = useState();
//Router setup
  return (
    <Router>
      <div className="App">
        <SearchBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/profile" component={Profile} />
          <Route path="/compare" component={Compare} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

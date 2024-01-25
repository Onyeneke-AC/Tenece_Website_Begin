import React from 'react';
import { BrowserRouter as Router, Routes as Switch , Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Introduction from './components/Introduction';
import Extra from './components/Extra';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Introduction />
        <Extra />
        <Switch>
          <Route path="/" exact Component={Home}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;

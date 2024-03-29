import React from 'react';
import { BrowserRouter as Router, Routes as Switch , Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';

function App() {

  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact Component={Home}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes as Switch , Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Introduction from './components/Introduction';
import Extra from './components/Extra';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Sidebar />
        <Introduction />
        <Extra />
        <Footer />
        <Switch>
          <Route path="/" exact Component={Home}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;

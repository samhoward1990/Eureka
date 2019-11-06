import React from 'react';
import Navbar from './components/navbar';
import HomepageContent from './components/homepage-content';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/sign-in">
            <h1>Hello please sign in</h1>
          </Route>
          <Route path="/">
            <HomepageContent />
          </Route>
        </Switch>
      </div >

    </Router>
  );
}

export default App;

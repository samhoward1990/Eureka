import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Discussion from './components/Discussion/discussion';
import Navbar from './components/navbar';
import HomepageContent from './components/homepage-content';
import Signin from './components/sign-in';
import Register from './components/register';
import Art from './components/Discussion/Blogs/Art';
import Music from './components/Discussion/Blogs/Music';
import Admin from './components/Discussion/Blogs/Admin';
import Food from './components/Discussion/Blogs/Food';
import Health from './components/Discussion/Blogs/Health';
import Chat from './components/Chat/Chat';
import fashion from './components/Discussion/Blogs/fashion';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Switch>
          <Route path="/sign-in">
            <Signin />
          </Route>
          <Route path="/register">
            <Register />

          </Route>

          <Route path="/discussion" exact>
            <Discussion />
          </Route>

          <Route path="/Chat">
            <Chat />
          </Route>

          <Route path="/discussion/art">
            <Art />
          </Route>

          <Route path="/discussion/admin">
            <Admin />
          </Route>

          <Route path="/discussion/food">
            <Food />
          </Route>

          <Route path="/discussion/health">
            <Health />
          </Route>

          <Route path="/discussion/music">
            <Music />
          </Route>

          <Route path="/discussion/fashion">
            <fashion />
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

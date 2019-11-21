import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Discussion from './components/Discussion/discussion';
import Navbar from './components/navbar';
import HomepageContent from './components/homepage-content';
import Signin from './components/sign-in';
import Register from './components/register';
import Art from './components/Discussion/Blogs/art';
import Music from './components/Discussion/Blogs/music';
import Admin from './components/Discussion/Blogs/admin';
import Food from './components/Discussion/Blogs/food';
import Health from './components/Discussion/Blogs/health';
import Chat from './components/Chat/Chat';
import fashion from './components/Discussion/Blogs/fashion';

function App() {
  let user = null
  // temp 
  // user = {
  //   name: "fred",
  //   email: "fred123@gmail.com"

  // }
  return (
    <Router>
      <div className="App">
        {/* <Navbar user={user} /> */}
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

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Discussion from './components/Discussion/Discussion';
import Navbar from './components/navbar';
import HomepageContent from './components/homepage-content';
import Signin from './components/sign-in';
import './App.css';
import Art from './components/Discussion/Blogs/Art';
import Music from './components/Discussion/Blogs/Music';
import Education from './components/Discussion/Blogs/Education';
import Food from './components/Discussion/Blogs/Food';
import Health from './components/Discussion/Blogs/Health';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        
        <Switch>
          <Route path="/sign-in">
           <h1>Hello please sign in</h1>
          </Route>

          <Route path="/discussion" exact>
            <Discussion />
          </Route>

          <Route path="/discussion/art">
            <Art/>
          </Route>

          <Route path="/discussion/education">
            <Education/>
          </Route>

          <Route path="/discussion/food">
            <Food/>
          </Route>

          <Route path="/discussion/health">
            <Health/>
          </Route>

          <Route path="/discussion/music">
            <Music/>
            <Signin />
          </Route>
          
          
          <Route path="/">
            <HomepageContent />
          </Route>
<<<<<<< HEAD
          <Route path="/discussionboards">
          </Route>
        </Switch>
=======
</Switch>
>>>>>>> 8b959b97c89f1271707a9975e7b3bbf951a312d9
      </div >

    </Router>
  );
}

export default App;

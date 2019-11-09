import React from 'react';
import { Link } from 'react-router-dom';
import './../Discussion/discussion.css';
import './Blogs/Art'

class Discussion extends React.Component {
    render() {
        return(
       
       <div className="container">
           <h1 id='art'><Link to="/discussion/art">ARTS & CRAFTS</Link></h1>
           
           <h2 id= 'music'><Link to="/discussion/music"> MUSIC </Link></h2>
           
           <h3 id= 'education'><Link to="/discussion/education">EDUCATION</Link></h3>
           
           <h4 id= 'food'><Link to="/discussion/food">FOOD</Link></h4>
           
           <h5 id= 'health'><Link to="/discussion/health">HEALTH & FITNESS</Link></h5>
            
            </div>
            )

    }

}





export default Discussion;
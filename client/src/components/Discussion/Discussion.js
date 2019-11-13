import React from 'react';
import { Link } from 'react-router-dom';
import './../Discussion/discussion.css';
import './Blogs/Art'

class Discussion extends React.Component {
    render() {
        return (

            <div className="container">
                <h1 id='art'><Link to="/discussion/art">ARTS & CRAFTS</Link>

                    <p></p>
                </h1>


                <h1 id='music'><Link to="/discussion/music"> MUSIC </Link></h1>

                <h1 id='education'><Link to="/discussion/education">EDUCATION</Link></h1>

                <h1 id='food'><Link to="/discussion/food">FOOD</Link></h1>

                <h1 id='health'><Link to="/discussion/health">HEALTH & FITNESS</Link></h1>

            </div>
        )

    }

}





export default Discussion;
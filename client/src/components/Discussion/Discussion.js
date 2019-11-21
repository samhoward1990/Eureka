import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom';
import './../Discussion/discussion.css';
import art from './images/art.jpg';
import music from './images/music.jpg';
import education from './images/education.jpeg';
import health from './images/fitness.gif';
import food from './images/food.jpeg';
import fashion from './images/fashion.gif';





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


  render() {
    return (
      <Container>

        <Row><p align='right' id='heading'>Eureka Blog Spot</p></Row>
        <Row>Categories:</Row>

        <Row>
          <Col lg={3}><h1 ><Link to="/discussion/art"><img id='art' src={art} alt="art" /></Link></h1></Col>

          <Col lg={5}><h1 ><Link to="/discussion/music"><img id='music' src={music} alt="music" /></Link></h1></Col>

          <Col lg={4}><h1 ><Link to="/discussion/education"><img id='education' src={education} alt="education" /></Link></h1></Col>
        </Row>

        <Row>
          <Col lg={5}><h1 ><Link to="/discussion/health"><img id='health' src={health} alt="health" /></Link></h1></Col>

          <Col lg={4}><h1 ><Link to="/discussion/food"><img id='food' src={food} alt="food" /></Link></h1></Col>

          <Col lg={3}><h1 ><Link to="/discussion/fashion"><img id='fashion' src={fashion} alt="fashion" /></Link></h1></Col>

        </Row>


        <Link to="/chat"><button type="button" class="btn btn-primary btn-lg btn-block">Start Chatting</button></Link>


      </Container>



    )
  }
}




export default Discussion
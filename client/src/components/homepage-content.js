import React from 'react';

import brainstorm from '../images/brainstorm.gif'
import GenerateButton from './generate-button';


class HomepageContent extends React.Component {
    state = {
        topic: "",
        topicDATA:
            ["Math", "History", "Technology", "Counseling"]
    };

    randomizedTopic = () => {
        let randomizedNumber = Math.floor(Math.random() * this.state.topicDATA.length);
        return this.state.topicDATA[randomizedNumber];
    }

    generateTopic = (e) => {
        e.preventDefault();

        let topic = this.randomizedTopic();
        // console.log(topic)

        this.setState({
            topic: topic
        });
        console.log(this.state)
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 d-flex justify-content-center">
                        <img src={brainstorm} alt="Brainstorming" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 d-flex justify-content-center">
                        <div className="card col-6 bg-light mb-3">
                            <div className="card-body">
                                <h2 className="card-title">A little bit about Eureka...</h2>
                                <p className="card-text">Welcome to Eureka! Eureka is a social forum that allows users to discuss forward-thinking ideas with other members. For help getting started on an idea press the generate button to be given a topic. After receiving a topic, hit the Blogs button to sign in and start connecting.</p>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="card col-6 mb-3 bg-light">

                        <div className="card-body">
                            <h3 className="card-title">Here is your topic: {this.state.topic}</h3>


                            <h5 className="card-text" id="topic-generator"></h5>


                        </div>
                        {/* <button onClick={e => { this.generateTopic(e); }}> Generate</button> */}
                    </div>
                </div>
                <GenerateButton handleClick={this.generateTopic}> </GenerateButton>
            </div>
        );
    }
}
export default HomepageContent;
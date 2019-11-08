import React from 'react';
import lightbulb from '../images/lightbulb.png';
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
                        <img className="mb-3" src={lightbulb} alt="Eureka!" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 d-flex justify-content-center">
                        <h2>About Us</h2>
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="card col-sm-6">

                        <div className="card-body">
                            <h3 className="card-title">Here is your topic: {this.state.topic}</h3>


                            <h5 className="card-text" id="topic-generator"></h5>


                        </div>
                        <GenerateButton handleClick={this.generateTopic}> </GenerateButton>
                        {/* <button onClick={e => { this.generateTopic(e); }}> Generate</button> */}
                    </div>
                </div>
            </div>
        );
    }
}
export default HomepageContent;
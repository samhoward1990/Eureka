import React, { Component } from "react";

class Generate extends Component {
    state = {
        topic: ""
    };

    handleClick = () => {

        let topic = this.randomizedTopic();
        console.log(topic)
        this.setState({
            topic: topic
        });

    }

    randomizedTopic() {
        let randomizedNumber = Math.floor(Math.random() * topicDATA.length - 1);
        return topicDATA[randomizedNumber];
    }

    render() {
        return (
            <div>
                <button className="btn btn-outline-secondary" onClick={this.handleClick}>Generate</button>
            </div>
        );
    }
}

const topicDATA =
    ["Math", "History", "Technology", "Counseling"]


export default Generate;
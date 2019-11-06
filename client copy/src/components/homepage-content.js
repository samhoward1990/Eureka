import React from 'react';
import lightbulb from '../images/lightbulb.png';
import GenerateButton from './generate-button';


class HomepageContent extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 d-flex justify-content-center">
                        <img src={lightbulb} alt="Eureka!" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 d-flex justify-content-center">
                        <div id="topic-generator">

                        </div>
                        <GenerateButton />
                    </div>
                </div>
            </div>
        );
    }
}
export default HomepageContent;
import React from 'react';
import lightbulb from '../images/lightbulb.png';

class HomepageContent extends React.Component {
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
                            <h3 className="card-title">Here is your topic: </h3>

                            <h5 className="card-text" id="topic-generator"></h5>


                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default HomepageContent;
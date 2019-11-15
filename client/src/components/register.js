import React from 'react';
import { Card } from 'semantic-ui-react';

class Register extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-8 col-md-6 col-lg-4">
                        <div className="card bg-light mt-5">
                            <div className="card-body">
                                <h3 className="card-title">Register</h3>
                                <form>
                                    <div className="form-group">
                                        <input type="text" className="form-control" id="first-name" placeholder="First Name"></input>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" id="last-name" placeholder="Last Name"></input>
                                    </div>
                                    <div className="form-group">
                                        <input type="email" className="form-control" id="email" placeholder="Email"></input>
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control" id="password" placeholder="Password"></input>
                                    </div>
                                    <button className="btn btn-outline-secondary btn-block">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Register;
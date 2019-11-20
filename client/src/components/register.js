import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'semantic-ui-react';
import API from "../utils/API";

class Register extends React.Component {

    state = {
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    };

    handleInputChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        // create user
        console.log(this.state);
        API.registerUser(this.state)
            .then(res => console.log('registered user!', res.data))
            .catch(err => console.log('error: ', err));
        // set up new state
        this.setState({
            firstName: "",
            lastName: "",
            email: "",
            password: ""
        });
    };
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
                                        <input type="text" className="form-control" placeholder="First Name" name="firstName" value={this.state.firstName} onChange={this.handleInputChange}></input>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Last Name" name="lastName" value={this.state.lastName} onChange={this.handleInputChange}></input>
                                    </div>
                                    <div className="form-group">
                                        <input type="email" className="form-control" placeholder="Email" name="email" value={this.state.email} onChange={this.handleInputChange}></input>
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control" id="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleInputChange}></input>
                                    </div>
                                    <button onClick={this.handleFormSubmit} className="btn btn-outline-secondary btn-block">Submit</button>
                                </form>
                                Already have an account? <Link to="/sign-in"><a>Sign in</a></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}
export default Register;


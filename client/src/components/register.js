import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'semantic-ui-react';

class Register extends React.Component {

    state = {
        firstname: "",
        lastname: "",
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
        this.setState({
            firstname: "",
            lastname: "",
            email: "",
            password: ""
        });
        console.log(this.state)
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
                                        <input type="text" className="form-control" placeholder="First Name" name="firstname" value={this.state.firstname} onChange={this.handleInputChange}></input>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Last Name" name="lastname" value={this.state.lastname} onChange={this.handleInputChange}></input>
                                    </div>
                                    <div className="form-group">
                                        <input type="email" className="form-control" placeholder="Email" name="email" value={this.state.email} onChange={this.handleInputChange}></input>
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control" id="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleInputChange}></input>
                                    </div>
                                    <button onClick={this.handleFormSubmit} className="btn btn-outline-secondary btn-block">Submit</button>
                                </form>
                                <p>Already have an account? Click here:</p><Link to="/sign-in"><a>Sign in</a></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}
export default Register;
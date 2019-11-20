import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import API from "../utils/API";



class Signin extends React.Component {

    state = {
        email: "",
        password: "",
        loggedIn: false
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
        API.verifyUser(this.state)
            .then(res => {
                if (res.data.status === "success") {
                    this.setState({
                        loggedIn: true
                    })
                } else {
                    alert("Wrong Credentials");
                }

            })
            .catch(err => console.log('error: ', err));
        // set up new state
        this.setState({
            email: "",
            password: ""
        });
    };


    render() {
        console.log(this.state)
        if (this.state.loggedIn === true) {
            return <Redirect to="/discussion" />
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 d-flex justify-content-center mt-5">
                        <div className="card bg-light col-4">
                            <div className="card-body">
                                <h1 className="card-title">Sign in</h1>
                                <form>
                                    <div className="form-group">
                                        <input type="email" className="form-control" name="email" placeholder="Email" value={this.state.email} onChange={this.handleInputChange}></input>
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control" name="password" placeholder="Password" value={this.state.password} onChange={this.handleInputChange}></input>
                                    </div>
                                    <button onClick={this.handleFormSubmit} type="submit" className="btn btn-outline-secondary btn-block">Sign in</button>
                                </form>
                                No account? <Link to="/register"><a>Register</a></Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default Signin;
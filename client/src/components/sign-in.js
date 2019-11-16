import React from 'react';
import { Link } from 'react-router-dom';

class Signin extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 d-flex justify-content-center mt-5">
                        <div className="card bg-light col-4">
                            <div className="card-body">
                                <h1 className="card-title">Sign in</h1>
                                <form>
                                    <div className="form-group">
                                        <input type="email" className="form-control" id="email" placeholder="Email"></input>
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control" id="password" placeholder="Password"></input>
                                    </div>
                                    <button type="submit" className="btn btn-outline-secondary btn-block">Sign in</button>
                                </form>
                                <p>No account? Click here:</p><Link to="/register"><a>Register</a></Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default Signin;
import React from 'react';

class Signin extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 d-flex justify-content-center mt-5">
                        <div className="card bg-light">
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
                            </div>

                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default Signin;
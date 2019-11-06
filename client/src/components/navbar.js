import React from 'react';

class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-light bg-light mb-3">
                <span className="navbar-brand h3 font-weight-bold">Eureka</span>
                <div className="d-flex justify-content-end">
                    <div className="nav">
                        <a className="nav-item" href="../../public/index.html"><button className="btn btn-outline-secondary">Home</button></a>
                        <a className="nav-item ml-2" href="../../public/sign-in.html"><button className="btn btn-outline-secondary">Sign in</button></a>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;
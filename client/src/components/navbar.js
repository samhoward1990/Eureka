import React from 'react';
import { Link } from 'react-router-dom';


class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-light bg-light mb-3">
                <span className="navbar-brand h3 font-weight-bold">Eureka</span>
                <div className="d-flex justify-content-end">
                    <div className="nav">
                        <Link to="/"><button className="btn btn-outline-secondary mr-2">Home</button></Link>
                        <Link to="/sign-in"><button className="btn btn-outline-secondary">Sign in</button></Link>

                        {/* <a className="nav-item" href="../../public/index.html"><button className="btn btn-outline-secondary">Home</button></a>
                        <a className="nav-item ml-2" href="../../public/sign-in.html"><button className="btn btn-outline-secondary">Sign in</button></a> */}
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;
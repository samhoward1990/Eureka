import React from 'react';
import { Link } from 'react-router-dom';


class Navbar extends React.Component {

    render() {
        let usernav = null;
        if (this.props.user) {
            usernav = (
                <Link to="/"><button className="ui blue button mr-2"><i className="fas fa-home"></i> Art</button></Link>
            )
        }
        return (

            <nav className="navbar navbar-success bg-success mb-3">
                <span className="navbar-brand h3 font-weight-bold"><i className="far fa-lightbulb"></i> Eureka</span>
                <div className="d-flex justify-content-end">
                    <div className="nav">
                        <Link to="/"><button className="btn btn-primary mr-2"><i className="fas fa-home"></i> Home</button></Link>
                        <Link to="/sign-in"><button className="btn btn-danger"><i className="fas fa-sign-in-alt"></i> Blog</button></Link>

                        {/* <a className="nav-item" href="../../public/index.html"><button className="btn btn-outline-secondary">Home</button></a>
                        <a className="nav-item ml-2" href="../../public/sign-in.html"><button className="btn btn-outline-secondary">Sign in</button></a> */}
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;
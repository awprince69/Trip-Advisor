import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Header.css'

const Header = () => {
    const [loggedIn,setLoggedIn] = useContext(UserContext)
    return (
        <nav className="navbar navbar-expand-lg navbar-light background">
            <div className="container-fluid">
                <Link className="navbar-brand text-white" to="/home">Trip-Advisor</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav ">
                        <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                        <Link className="nav-link active" to="/search">Destination</Link>
                        <Link className="nav-link active" to="#">Blog</Link>
                        <Link className="nav-link active" to="#">Contact</Link>
                        {!loggedIn.email && <Link to="/login"><button type="button" className="btn btn-success mt-1">Login</button></Link>}
                        <Link className="nav-link active" to="#">{loggedIn.displayName}</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;
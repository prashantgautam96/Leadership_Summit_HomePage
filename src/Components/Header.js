import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import '../Components.css';

export default function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-light fixed-top px-md-5">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Leadership Summit</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item mx-md-3">
                                <Link className="nav-link active" aria-current="page" to="">Home</Link>
                            </li>
                            <li className="nav-item mx-md-4">
                                <Link className="nav-link" to="">About</Link>
                            </li>
                            <li className="nav-item mx-md-2">
                                <Link className="nav-link" to="">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

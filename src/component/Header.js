import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch,Link } from "react-router-dom"

export default class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar  ftco-navbar-light" id="ftco-navbar">
                <div className="container">
                    <a className="navbar-brand" href="index.html">SMART <span>REAL</span></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="fa fa-bars"></span> Menu
	                </button>
                    <div className="collapse navbar-collapse" id="ftco-nav">
                        <Router>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active"><a href="Home" className="nav-link">Home</a></li>
                            <li className="nav-item"><a href="Maps" className="nav-link">Location</a></li>
                            <li className="nav-item"><a href="Rooms" className="nav-link">Apartment Room</a></li>
                            <li className="nav-item"><a href="Blog" className="nav-link">Blog</a></li>
                            <li className="nav-item"><a href="Contact" className="nav-link">Contact</a></li>
                               
                        </ul>
                        </Router>
                    </div>
                </div>
            </nav>
        )
    }
}


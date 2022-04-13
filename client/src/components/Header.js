import React, { Component } from 'react';
import logo from '../imgs/logo.png';
import { Link } from "react-router-dom";

export class Header extends Component {
  render() {
    return (
      <header>
        <div className="header-top-bar">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <ul className="top-bar-info list-inline-item pl-0 mb-0">
                  <li className="list-inline-item"><a href="mailto:support@gmail.com"><i className="icofont-support-faq mr-2"></i>support@novena.com</a></li>
                  <li className="list-inline-item"><i className="icofont-location-pin mr-2"></i>Address Ta-134/A, New York, USA </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <div className="text-lg-right top-right-bar mt-2 mt-lg-0">
                  <a href="">
                    <span>Call Now : </span>
                    <span className="h4">(484)-873-3045</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav className="navbar navbar-expand-lg navigation" id="navbar">
          <div className="container">
            <a className="navbar-brand" href="index.html">
                <img src={logo} alt="Logo" className="img-fluid" width="250"/>
              </a>

              <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarmain" aria-controls="navbarmain" aria-expanded="false" aria-label="Toggle navigation">
            <span className="icofont-navigation-menu"></span>
            </button>
          
            <div className="collapse navbar-collapse" id="navbarmain">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
              <a className="nav-link" href="index.html"><Link to="/Home">Home</Link></a>
              </li>
              <li className="nav-item"><a className="nav-link" href=""><Link to="/MMJProgram">EMS MMJ Program</Link></a></li>
              <li className="nav-item"><a className="nav-link" href=""><Link to="/Workers">Workers Comp</Link></a></li>
              <li className="nav-item"><a className="nav-link" href=""><Link to="/Covid">Covid-19</Link></a></li>
              <li className="nav-item"><a className="nav-link" href=""><Link to="/FAQs">FAQS</Link></a></li>
            </ul>
            </div>
          </div>
        </nav>
      </header>
    )
  }
}

export default Header;
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './css/Error404.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export class Error404 extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div id="notfound">
        <div class="notfound">
          <div class="notfound-404">
            <h1>4<span></span>4</h1>
          </div>
          <h2>Oops! Page Not Be Found</h2>
          <p>Sorry but the page you are looking for does not exist, have been removed. name changed or is temporarily unavailable</p>
          <a> <Link to="/Home">Back to homepage</Link> </a>
        </div>
      </div>
      <Footer/>
      </div>

    )
  }
}

export default Error404
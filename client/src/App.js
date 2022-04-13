import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route, Routes
} from "react-router-dom";

import Home from './pages/Home';
import Covid from './pages/Covid19';
import Program from './pages/Program';
import FAQs from './pages/FAQs';
import Workers from './pages/Workers';
import Error404 from './pages/Error404';

export class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/MMJProgram" element={<Program />} />
          <Route path="/FAQs" element={<FAQs />} />
          <Route path="/Workers" element={<Workers />} />
          <Route path="/Covid" element={<Covid />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
    )
  }
}

export default App;
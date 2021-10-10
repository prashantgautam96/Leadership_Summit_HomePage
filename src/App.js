import './App.css';
import Header from './Components/Header.js';
import Herobg from './Components/Herobg.js';
import Footer from './Components/Footer.js';
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <Header/>
      <Herobg/>
      <Footer/>
    </Router>
    </>
  );
}

export default App;

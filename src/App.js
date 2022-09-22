import logo from './logo.svg';
import './App.css';
import LandingPage from './Components/LadingPage';
import NavBar from './Components/NavBar';
import React from 'react';
import Footer from './Components/Footer';

function App() {
  return (
    <React.Fragment>
      <NavBar/>
      <LandingPage/>
      <Footer/>
    </React.Fragment>
  );
}

export default App;

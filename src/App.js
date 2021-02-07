import React from 'react';
import NavBar from './Components/NavBar';
import Carousel1 from './Components/Carousel';
import './App.css';
import CardSection from './Components/CardSection';
import Footer from './Components/Footer';
import Darkmode from "darkmode-js";

const App = () => {
  const options = {
    label: '🌓',
    time: '0.5s',
  };

  const darkmode = new Darkmode(options);

  return (
    <div>
      <NavBar />
      <Carousel1 />
      <CardSection />
      {darkmode.showWidget()}
      <Footer />
    </div>
  );
};

export default App;
import React from 'react';
import './App.css';
import Particles from 'react-tsparticles';
import Navigation from './components/navigation/Navigation';
import Logo from './components/logo/Logo';
import ImageBrowser from './components/imageBrowser/ImageBrowser';
import UserRank from './components/userRank/UserRank';

const particlesOptions = {
  particles: {
    color: {
      value: "#ffffff",
    },
    links: {
      color: "#ffffff",
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    collisions: {
      enable: true,
    },
    move: {
      direction: "none",
      enable: true,
      outMode: "bounce",
      random: false,
      speed: 4,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 80,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      random: true,
      value: 5,
    },
  }
};

function App() {
  return (
    <div className="App">
      <Particles params={particlesOptions} className='particles'/>
      <Navigation />
      <Logo />
      <UserRank />
      <ImageBrowser />
      {/*<ImageDisplay />
      <FaceRecognition />*/}
    </div>
  );
}

export default App;

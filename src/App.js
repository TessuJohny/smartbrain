import React, { Component } from 'react';
import './App.css';
import Particles from 'react-tsparticles';
import Clarifai from 'clarifai';
import Navigation from './components/navigation/Navigation';
import Logo from './components/logo/Logo';
import ImageBrowser from './components/imageBrowser/ImageBrowser';
import UserRank from './components/userRank/UserRank';
import FaceRecognition from './components/faceRecognition/FaceRecognition';

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

const app = new Clarifai.App({
  apiKey: '533a7995bc2649d5bb8da00bad627c70'
});

class App extends Component {

  constructor() {
    super();
    this.state = {
      input: '',
      imageURL: ''
    };
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  }

  onButtonClick = () => {
    this.setState({ imageURL: this.state.input });
    app.models.predict(Clarifai.COLOR_MODEL, this.state.input).then(
      function (response) {
        console.log(response);
      },
      function (err) {

      }
    );
  }

  render() {
    return (
      <div className="App">
        <Particles params={particlesOptions} className='particles' />
        <div className='nav'>
          <Logo />
          <Navigation />
        </div>
        <UserRank />
        <ImageBrowser onInputChange={this.onInputChange} onButtonClick={this.onButtonClick} />
        <FaceRecognition imageURL={this.state.imageURL} />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Particles from 'react-tsparticles';
import Clarifai from 'clarifai';
import Logo from './components/header/logo/Logo';
import Navigation from './components/header/navigation/Navigation';
import SignInCard from './components/signIn/SignInCard';
import RegisterCard from './components/register/RegisterCard';
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
      imageURL: '',
      box: '',
      router: 'signIn',
      isSignedIn: false
    }
  }

  calculateBoxBoundary = (response) => {
    const boxBoundary = response.outputs[0].data.regions[0].region_info.bounding_box;
    const imageElement = document.getElementById('inputImg');
    const height = Number(imageElement.height);
    const width = Number(imageElement.width);
    return {
      top: height * boxBoundary.top_row,
      right: width - (width * boxBoundary.right_col),
      bottom: height - (height * boxBoundary.bottom_row),
      left: width * boxBoundary.left_col
    }
  }

  drawBox = (box) => {
    this.setState({ box: box });
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  }

  onButtonClick = () => {
    this.setState({ imageURL: this.state.input });
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then(response => this.drawBox(this.calculateBoxBoundary(response)))
      .catch(err => console.log(err))
  }

  changeRouterTo = (page) => {
    if(page === 'home'){
      this.setState({isSignedIn: true});
    } else{
      this.setState({isSignedIn: false});
    }
    this.setState({ router: page });
  }

  render() {
    const {isSignedIn, imageURL, box, router} = this.state;
    return (
      <div className="App">
        <Particles params={particlesOptions} className='particles' />
        <div className='header'>
          <Logo />
          <Navigation changeRouterTo={this.changeRouterTo} isSignedIn={isSignedIn}/>
        </div>
        {
          this.state.router === 'home' 
          ?
          <div>
            <UserRank />
            <ImageBrowser onInputChange={this.onInputChange} onButtonClick={this.onButtonClick} />
            <FaceRecognition imageURL={imageURL} box={box} />
          </div>
          :
          (
            router === 'signIn'
            ?
            <SignInCard changeRouterTo={this.changeRouterTo} />
            :
            <RegisterCard changeRouterTo={this.changeRouterTo}/>
          )       
        }
      </div>
    );
  }
}

export default App;

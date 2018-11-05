import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Player } from 'video-react';
import "../node_modules/video-react/dist/video-react.css"; 

class App extends Component {
  render() {
    return (
      <div className="App">
        <Player
			playsInline
			poster="/assets/poster.png"
			src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
		/>
      </div>
    );
  }
}

export default App;

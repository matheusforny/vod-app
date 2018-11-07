import React, { Component } from 'react';
import { Player } from 'video-react';
import SearchPage from './SearchPage';

// class component
class App extends Component {
	
  constructor(props){
    super(props);
		
    this.state = {
	  videoMode: true
    }
  }

  render() {	
    return (
      <div className="App">
		{this.state.videoMode ? <Player
			playsInline
			poster="/assets/poster.png"
			src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
		/>: <SearchPage/>}
	  </div>
	)
  }    
}

export default App;
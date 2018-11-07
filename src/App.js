import React, { Component } from 'react';
import { Player } from 'video-react';
import SearchPage from './SearchPage';

// class component
class App extends Component {
	
  constructor(props){
    super(props);
		
    this.state = {
      urlVideo: "",
	  videoMode: false
    }
  }
  
  atualizarUrlVideo(url) {
	this.setState({
		videoMode: true,
		urlVideo: url
	});
  }
  
  aoTerminarVideo() {
	  this.setState({
		  videoMode: false
	  });
  }

  render() {	
    return (
      <div className="App">
		{this.state.videoMode ? <Player
			autoPlay
			onEnded={this.aoTerminarVideo.bind(this)}
			src={this.state.urlVideo}
		/>: <SearchPage atualizarUrlVideo={this.atualizarUrlVideo.bind(this)}/>}
	  </div>
	)
  }    
}

export default App;
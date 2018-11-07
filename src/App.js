import React, { Component } from 'react';
import SearchPage from './SearchPage';
import VideoPage from './VideoPage';

// class component
class App extends Component {
	
  constructor(props){
    super(props);
	
	window.addEventListener('keydown', e => this.handleKeyPress(e));
		
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
  
  handleKeyPress = (event) => {
	event.preventDefault();  
	  
	if (event.keyCode === 39)
		this.refs.searchpage.nextProperty();
	else if (event.keyCode === 37)
		this.refs.searchpage.prevProperty();
	else if (event.keyCode === 13)
		this.chamarVideo();
  }

  render() {	
    return (
      <div className="App">
		{this.state.videoMode ? <VideoPage
			onEnded={this.aoTerminarVideo.bind(this)}
			src={this.state.urlVideo}
		/> : 
		<SearchPage ref='searchpage' atualizarUrlVideo={this.atualizarUrlVideo.bind(this)}/>}
	  </div>
	)
  }    
}

export default App;
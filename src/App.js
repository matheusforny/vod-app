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
	  listaVideosVistos: [],
	  videoMode: false
    }
  }
  
  atualizarUrlVideo(url, idVideo) {
	var videoNovoAssistido = false;
	
	if (this.state.listaVideosVistos.indexOf(idVideo))
		videoNovoAssistido = true;
	
	this.setState({
		videoMode: true,
		listaVideosVistos: videoNovoAssistido ? this.state.listaVideosVistos.concat([idVideo]) : this.state.listaVideosVistos,
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
	else if (event.keyCode === 27)
		this.aoTerminarVideo();
  }

  render() {	
    return (
      <div className="App">
		{this.state.videoMode ?
			<VideoPage ref='videopage'
				onEnded={this.aoTerminarVideo.bind(this)}
				src={this.state.urlVideo}
			/> : 
			<SearchPage	ref='searchpage'
				quantidadeVideosVistos={this.state.listaVideosVistos.length}
				atualizarUrlVideo={this.atualizarUrlVideo.bind(this)}
			/>
		}
	  </div>
	)
  }    
}

export default App;
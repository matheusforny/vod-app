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
	  indexesVideosVistos: [],
	  listaVideosVistos: [],
	  videoMode: false,
	  mostrarListaVideosVistos: false
    }
  }
  
  atualizarUrlVideo(url, idVideo, video) {
	var indexesVideosVistos = this.state.indexesVideosVistos;
	var listaVideosVistos = this.state.listaVideosVistos;
		
	if (this.state.indexesVideosVistos.indexOf(idVideo) < 0) {
		indexesVideosVistos.push(idVideo);
		listaVideosVistos.push(video);
	}
		
	this.setState({
		videoMode: true,
		indexesVideosVistos: indexesVideosVistos,
		listaVideosVistos: listaVideosVistos,
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
  
  atualizarModoListaVideo = (mostrarListaVideosVistos) => {
	  this.setState({
		  mostrarListaVideosVistos: mostrarListaVideosVistos
	  });
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
				indexesVideosVistos={this.state.indexesVideosVistos}
				listaVideosVistos={this.state.listaVideosVistos}
				mostrarListaVideosVistos={this.state.mostrarListaVideosVistos}
				atualizarModoListaVideo={this.atualizarModoListaVideo.bind(this)}
				quantidadeVideosVistos={this.state.indexesVideosVistos.length}
				atualizarUrlVideo={this.atualizarUrlVideo.bind(this)}
			/>
		}
	  </div>
	)
  }    
}

export default App;
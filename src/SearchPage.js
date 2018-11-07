import React, { Component } from 'react';
import './App.css';
import jsonData from './data/jsonData';
import Card from './components/Card';
import "../node_modules/video-react/dist/video-react.css"; 

// class component
class SearchPage extends Component {

  constructor(props){
    super(props);
		
    this.state = {
      entries: jsonData.entries,
      entry: jsonData.entries[0],
	  videoMode: false
    }
  }

  nextProperty = () => {
    const newIndex = this.state.entry.index + 1;
	
	if (newIndex < this.state.entries.length) {
		console.log("Iremos para " + newIndex);
	
		this.setState({
		entry: jsonData.entries[newIndex]
		})
	}
  }

  prevProperty = () => {
    const newIndex = this.state.entry.index - 1;
	
	if (newIndex >= 0) {
		console.log("Voltamos para " + newIndex);
	
		this.setState({
		entry: jsonData.entries[newIndex]
		})
	}
  }
  
  chamarVideo = () => {
	this.props.atualizarUrlVideo(this.state.entry.contents[0].url);
  }

  render() {
    const {entries, entry} = this.state;
	
    return (
      <div className="SearchPage">
	    <br />
        <br />

        <div className="page">
            <section>
                <h1>Projeto VOD</h1>
				<h1>Desenvolvido por Matheus Forny</h1>
            </section>

            <div className="col">
              <div className={`cards-slider active-slide-${entry.index}`}>
                <div className="cards-slider-wrapper" style={{
				  'transform': `translateX(-${entry.index*(100/entries.length)}%)`
                }}>
                  {
                    entries.map(entry => <Card key={entry._id} entry={entry}/>)
                  }
                </div>
              </div>
            </div>
			<button className="botaoControleCarousel"
				onClick={() => this.prevProperty()}
				disabled={entry.index === 0}
			>Anterior</button>
			<button className="botaoAssistirVideo"
				onClick={this.chamarVideo} 
			>Assistir Vídeo</button>
			<button  className="botaoControleCarousel"
				onClick={() => this.nextProperty()} 
				disabled={entry.index === jsonData.entries.length - 1}
			>Seguinte</button>
		</div>
      </div>
	  
    );
  }
}

export default SearchPage;
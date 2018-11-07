import React, { Component } from 'react';
import { Player } from 'video-react';

// class component
class SearchPage extends Component {

    componentDidMount = function() {
		this.refs.player.toggleFullscreen();
	}

	render() {
		return (
			<div>
				<Player
					ref="player"
					autoPlay
					onEnded={this.props.onEnded}
					src={this.props.src}
				/>
				<br />
				<br />
				<button
					className="botaoAssistirVideo"
					onClick={this.props.onEnded}
				>
				Voltar à tela anterior
				</button>
			</div>
		);
	}
}

export default SearchPage;
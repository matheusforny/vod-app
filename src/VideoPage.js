import React, { Component } from 'react';
import { Player } from 'video-react';

// class component
class SearchPage extends Component {

    componentDidMount = function() {
		this.refs.player.toggleFullscreen();
	}

	render() {
		return (
			<Player
				ref="player"
				autoPlay
				onEnded={this.props.onEnded}
				src={this.props.src}
			/>
		);
	}
}

export default SearchPage;
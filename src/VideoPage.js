import React, { Component } from 'react';
import { Player } from 'video-react';

// class component
class SearchPage extends Component {

	render() {
		return (
			<Player
				autoPlay
				onEnded={this.props.onEnded}
				src={this.props.src}
			/>
		);
	}
}

export default SearchPage;
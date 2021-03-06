import React from 'react';

import {
	ErrorImageOverlay,
	ErrorImageContainer,
	ErrorImageText
} from './error-boundary.styles';

class ErrorBoundary extends React.Component{
	constructor(){
		super();

		this.state = {
			hasErrored: false
		}
	}

	static getDerivedStateFromError(error) {
		//proccess the error
		return { hasErrored: true };
	}

	componentDidCatch(error, info) {
		console.log(error, info)
	}

	render() {
		return (this.state.hasErrored) ? 
			(
				<ErrorImageOverlay>
					<ErrorImageContainer imageUrl={'https://i.imgur.com/yW2W9SC.png'} />
					<ErrorImageText>
						Sorry this page is broken
					</ErrorImageText>
				</ErrorImageOverlay>
			) : 
			(this.props.children)
	}
}

export default ErrorBoundary;
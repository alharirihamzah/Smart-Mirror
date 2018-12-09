import React, { Component } from 'react'

import {
	AppWrapper,
	InnerWrapper,
	Title
} from './style'

class SmartMirror extends Component {
	constructor(props) {
		super(props)

		this.state = {
			
		}
	}

	render() {
		return (
			<AppWrapper>
				<InnerWrapper>
					<Title> Hello Fuckers 🖕😎 </Title>
				</InnerWrapper>
			</AppWrapper>
		)
	}
}

export default SmartMirror
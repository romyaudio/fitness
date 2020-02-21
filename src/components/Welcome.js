import React from 'react'

function Welcome(props) {
	return(
		<div className="container">
			<div className="Fitness-User-Info">
				<h1>Hello {props.username}</h1>
				<p>Welcome to Fitness</p>
			</div>
		</div>)
}
export default Welcome
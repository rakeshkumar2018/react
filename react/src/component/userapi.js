
import React, { Component } from 'react'
import axios from 'axios';

class UserApis extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: []
		}
	}
	componentDidMount() {
		axios.get('https://jsonplaceholder.typicode.com/users')
			.then(response => {
				console.log(response)
				this.setState({
					user: response.data
				})
			})
			.catch(error => {
				console.log("Error==>> " + error)
			})
	}
	render() {
		// console.log(this.state.user && this.state.user)
		return (
			<div>
				<h2>  Api call... </h2>
				<div>
					{this.state.user.map(item => (
						<li>	{item.name}</li>

					))}


				</div>
			</div>
		)
	}
}

export default UserApis;

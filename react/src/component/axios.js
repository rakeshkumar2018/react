import React, { Component } from 'react'
import axios from 'axios'

class AxiosTest extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: {}
		}
	}
	componentDidMount() {
		axios.get('http://api.citybik.es/v2/networks/norisbike-nurnberg')
			.then(res => {
				// console.log(res)

				this.setState({
					user: res.data
				})
			})
			.catch(error => {
				console.log(error)
			})
	}

	render() {
		console.log("this is =", this.state.user.network)
		// console.log("this id =", this.state.user.network && this.state.user.network.stations[0].free_bikes)
		return (
			<div>
				<h2>User List </h2>
				{this.state.user.network && (this.state.user.network.stations).map(item => (
					<div>
						{item.id}&nbsp;&nbsp;&nbsp;&nbsp;
						{item.free_bikes}
					</div>

				))}

			</div>
		)
	}
}
export default AxiosTest;

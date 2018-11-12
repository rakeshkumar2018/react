import React, { Component } from 'react'
import Button from './button';
import Input from './inputbox'
export class Calculator extends Component {
	constructor(props) {
		super(props);
		this.state = {
			n1: '',
			n2: '',
			res: ''

		}

	}
	handleChange = (event, type) => {
		this.setState({
			[type]: event.target.value
		})
	}
	fnCal = (e) => {
		var fn = e
		var n1 = Number(this.state.n1)
		var n2 = Number(this.state.n2)
		var res;

		this.setState({
			res: this.state.res,



		})

		// ==============Switch ===================
		switch (e) {
			case 'add':
				res = n1 + n2;
				alert(res);
				break;

			case 'sub':
				res = n1 - n2;
				alert(res);
				break;
			case 'mul':
				res = n1 * n2;
				alert(res);
				break;
			case 'div':
				res = n1 / n2;
				alert(res);
				break;
			// default:
			// 	alert("Wrong")
		}
	}

	render() {
		return (
			<div>
				<h2>Calculator</h2>
				<hr />
				<div>

					<Input label={" value1 "} id={"val1"} placeholder={"Enter val1"} value={this.state.val1} onChange={(e) => this.handleChange(e, "n1")} />
					<Input label={" value2 "} placeholder={"Enter val2"} value={this.state.val2} onChange={(e) => this.handleChange(e, "n2")} />
					<Input label={"Result="} placeholder={"Result"} value={this.state.res} onChange={(e) => this.handleChange(e, "res")} />
					<Button label={"Add"} onClick={() => this.fnCal("add")} />
					<Button label={"Sub"} onClick={() => this.fnCal("sub")} />
					<Button label={"Mul"} onClick={() => this.fnCal("mul")} />
					<Button label={"Div"} onClick={() => this.fnCal("div")} />

				</div>
				<hr />

			</div>
		)
	}
}

export default Calculator;

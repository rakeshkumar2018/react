import React from 'react';

export default class CustomTextInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            n1: '',
            n2: ''
        }
    }
    handleChange = (event, type) => {
        this.setState({
            [type]: event.target.value
            // n2: event.target.n2
        })

    }
    add = () => {
        let sum = Number(this.state.n1) + Number(this.state.n2)
        alert(sum);
        this.setState({
            n1: '',
            n2: ''
        })
    }

    render() {
        return (
            <div>
                <h3> Addition </h3>
                value1:  <input type="text" value={this.state.n1} onChange={(e) => this.handleChange(e, "n1")} /><br />
                value2: <input type="text" value={this.state.n2} onChange={(e) => this.handleChange(e, "n2")} /><br />
                <input type="button" value="Add" onClick={() => this.add()} />
            </div>
        )
    }

}
import React, { Component } from 'react'

export class Inputbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    }
  }
  handleChange = (event, type) => {
    this.setState({
      [type]: event.target.value
    })
  }
  render() {
    return (
      <div>
        {this.props.label}
        <input type="text" value={this.props.value} placeholder={this.props.placeholder} onChange={this.props.onChange} />
      </div>
    )
  }
}
export default Inputbox

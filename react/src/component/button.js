import React, { Component } from 'react'

class Button extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div>
        <button className="btn btn-default" onClick={this.props.onClick} >
          {this.props.label}
        </button>
      </div>
    )
  }
}
export default Button;

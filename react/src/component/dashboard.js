import React, { Component } from 'react'

class Dashboard extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <h2> Welcome to dashboard </h2>
                Email={this.props.data.email} <br />
                Pass={this.props.data.pass}

            </div>
        )
    }
}

export default Dashboard

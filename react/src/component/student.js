import React, { Component } from 'react'

export class Stud extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div>
                {this.props.title}:{this.props.data.length}
                {this.props.data.map((obj, key) => (
                    <div key={key}>
                        <span> <b>Name:</b> {obj.name} </span> <br />

                    </div>
                ))}

            </div>
        )
    }
}

export default Stud

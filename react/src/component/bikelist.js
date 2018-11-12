import React, { Component } from 'react';


class BikeList extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }

    }
    render() {
        return (
            <div>

                <h2> Bike List data are call from child Component </h2>

                name:{this.props.obj.name}
            </div>
        )
    }
}
export default BikeList;

import React, { Component } from 'react';
import BikeList from './bikelist'

class Bikedetail extends Component {
    constructor(props) {
        super(props);
    }
    // fncall = () => {
    //     alert("clicked")
    // {onClick = () => this.fncall()}
    // }
    render() {
        return (
            <div className="right">
                <div className="split right">

                    <h2> Welcome to next page </h2>

                    name:{this.props.data.name}<br />
                    id:{this.props.data.id}<br />
                    url:<a href={'https:/' + this.props.data.url} target="_blank">
                        {this.props.data.url}<br />
                    </a>
                    city:{this.props.data.city}<br />
                    country:{this.props.data.country}<br />

                </div>
            </div>
        )
    }
}
export default Bikedetail;
import React, { Component } from 'react'
import axios from 'axios'

class Apicall extends Component {
  constructor(props) {
    super(props)
    this.state = {
      station: {},
      isLoad: false

    }
  }
  componentDidMount() {
    axios.get('http://api.citybik.es/v2/networks/norisbike-nurnberg')
      .then(res => {
        console.log(res.data)
        this.setState({
          station: res.data,
          isLoad: true
        })

      })
  }

  render() {
    console.log("Msg=", this.state.station)
    return (
      <div>
        <h2>  This page is called..... </h2>
        {this.state.isLoad &&
          <div className="left">
            {this.state.station.network.stations.map((item, i) => (
              <li key={i} > {item.id} </li>
            ))}

          </div>
        }
      </div>
    )
  }
}
export default Apicall;





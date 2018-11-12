import React from 'react';
import Bikedetail from './bikedetails'

class Bike extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      isClick: false,
      data: {
        company: '',
        id: '',
        url: '',

        name: '',
        country: '',
        city: '',
      },
      bikeArr: []

    };
  }

  componentDidMount() {
    fetch("http://api.citybik.es/v2/networks")
      .then(res => res.json())
      .then(
        (result) => {
          // console.log(result);

          this.setState({
            isLoaded: true,
            items: result
          });

        },

        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
  fnClick = (e) => {
    {
      this.setState({
        data: {
          name: this.state.items.networks[e].name,
          id: this.state.items.networks[e].id,
          country: this.state.items.networks[e].location.country,
          city: this.state.items.networks[e].location.city,
          url: this.state.items.networks[e].href
        },
        isClick: true,
        bikeArr: [...this.state.bikeArr, this.state.data]
      })
      console.log(this.state.isLoaded)
      console.log(this.state.items.networks[e].location.country)
      console.log(this.state.items.networks[e].location.city)
      console.log(this.state.items.networks[e].name)
      console.log(this.state.data.id)
      console.log(this.state.items.networks[e].location.country)

    }
  }

  render() {
    console.log("=====", this.state.data.url)

    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>
    } else {
      return (
        <div className="left">
          <div className="split left">

            <ul>
              {items.networks.map((item, key) => (
                <li key={item.id} onClick={() => this.fnClick(key)}>
                  {/* {item.company}&nbsp;&nbsp; */}
                  {item.name}
                </li>
              ))}

            </ul>
            <div >
            </div>
            {this.state.isClick &&
              <div>
                <Bikedetail data={this.state.data} />
              </div>
            }
          </div>
        </div>
      );
    }
  }
}
export default Bike;
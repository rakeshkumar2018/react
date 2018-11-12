import React from 'react'
class UserApi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("http://api.citybik.es/v2/networks/norisbike-nurnberg")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result)
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

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          {/* {items.network.id}
          {items.network.href} */}

          {items.network.stations.map(item => (
            <li key={item.extra.uid}>
              {item.extra.number}&nbsp;&nbsp;&nbsp;
              {/* {network.id} */}
              {item.empty_slots}&nbsp;&nbsp;&nbsp;
              {item.name}&nbsp;&nbsp;&nbsp;
            </li>
          ))}


        </div>
      );
    }
  }
}
export default UserApi;
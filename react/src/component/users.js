
import React from 'react';

class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div>
        {/* <h2>{this.props.title}: {this.props.data && this.props.data.length}</h2> */}
        <h2>{this.props.title}: {this.props.data.length}</h2>
        {/* {this.props.data && this.props.data.map((obj, key) => ( */}
        {this.props.data.map((obj, key) => (
          <div key={key}>
            <span> <b>Name:</b> {obj.name} </span> <br />
            <span><b>UserName:</b>{obj.username}</span><br />
            <span><b>Phone:</b>{obj.mobile}</span><br />
            <span><b>Address:</b>{obj.address}</span><br />
            <span><b>Gender:</b>{obj.gender}</span><br />
          </div>
        ))}

      </div>
    )
  }
}
export default Users;



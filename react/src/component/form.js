
import React from 'react';
import Users from "./users";

class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            usersArr: [],
            user: {
                name: '',
                username: '',
                address: '',
                mobile: '',
                gender: '',
            },
            submitted: false,
        }
        // this.handleChange = this.handleChange.bind(this);
        // this.onRegs = this.onRegs.bind(this);
    }
    handleChange = (event, type) => {
        this.setState({
            user: {
                ...this.state.user,
                [type]: event.target.value
            }
        })
    }
    onRegs = () => {
        // onRegs() {
        this.setState({
            submitted: true,
            usersArr: [...this.state.usersArr, this.state.user]
        })
    }
    render() {
        return (
            <div>
                <div>
                    Name:  <input type="text" placeholder="Name" value={this.state.name} onChange={(e) => this.handleChange(e, "name")} /><br />
                    UName: <input type="text" placeholder="UserName" value={this.state.username} onChange={(e) => this.handleChange(e, "username")} /><br />
                    Mobile:  <input type="text" placeholder="Name" value={this.state.mobile} onChange={(e) => this.handleChange(e, "mobile")} /><br />
                    {/* Phone no:  <input type="text" placeholder="Phone" value={this.state.phone} onChange={(e) => this.handleChange(e, "phone")} /><br /> */}
                    Address: <textarea value={this.state.address} onChange={(e) => this.handleChange(e, "address")}></textarea><br />
                    <select value={this.state.value} onChange={(e) => this.handleChange(e, "gender")}>
                        <option value=''>Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div>
                    <button onClick={() => this.onRegs()}> Add User</button>
                </div>
                {this.state.submitted &&
                    <div>
                        {/* <hr />
            <h2>User Details:</h2>
            <span> <b>Name:</b> {this.state.name} </span> <br />
            <span><b>UserName:</b>{this.state.username}</span><br />
            <span><b>Phone:</b>{this.state.mobile}</span><br />
            <span><b>Address:</b>{this.state.address}</span><br />
            <span><b>Gender:</b>{this.state.gender}</span><br /> */}
                        <Users data={this.state.usersArr} title={"Users List"} />
                    </div>
                }
            </div>
        )
    }
}
export default Form;



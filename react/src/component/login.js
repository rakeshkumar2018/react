import React, { Component } from 'react'
import Dashboard from './dashboard'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            obj: {
                email: 'abc@gmail.com',
                pass: '12345',
            },

            email: '',
            pass: '',
            isLogin: false
        }
    }
    handleChange = (event, type) => {
        this.setState({
            [type]: event.target.value
        })
    }
    Login = () => {

        if (this.state.email == this.state.obj.email && this.state.pass == this.state.obj.pass) {
            this.setState({
                isLogin: true
            })
        } else {
            alert("Enter correct email and password")
        }
    }
    render() {
        console.log("State=" + this.state.email)
        return (
            <div>
                <h2>Login form </h2>
                <div>
                    Email:   <input type="text" value={this.state.email} onChange={(e) => this.handleChange(e, "email")} /> <br />
                    Pass:    <input type="text" value={this.state.pass} onChange={(e) => this.handleChange(e, "pass")} /> <br />
                    {/* Name:  <input type="text" placeholder="Name" value={this.state.name} onChange={(e) => this.handleChange(e, "name")} /><br /> */}
                    <button onClick={() => this.Login()}> Login </button>
                </div>
                {this.state.isLogin &&
                    <div>
                        <Dashboard data={this.state.obj} />
                    </div>
                }
            </div>
        )
    }
}
export default Login;
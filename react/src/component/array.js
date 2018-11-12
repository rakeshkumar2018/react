import React, { Component } from 'react'
import Stud from './student'
export default class Student extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userArray: [],
            user: {
                name: '',
                fields: {},
                errors: {}
            }

        }
    }

    handleChange = (event, type) => {

        // let fields = this.state.fields;
        // let errors = {};
        // let formIsValid = true        
        // if(!fields["name"]){
        //    formIsValid = false;
        //    errors["name"] = "Cannot be empty";
        // }

        // if(typeof fields["name"] !== "undefined"){
        //    if(!fields["name"].match(/^[a-zA-Z]+$/)){
        //       formIsValid = false;
        //       errors["name"] = "Only letters";
        //    }        
        // }
        this.setState({
            user: {
                ...this.state.user,
                [type]: event.target.value
            }
        })
    }

    fnClik = () => {
        this.setState({
            userArray: [...this.state.userArray, this.state.user],
            // name: this.state = ''
        })
    }
    render() {
        // console.log(this.state.userArray)
        return (

            <div>
                Enter Name:  <input type="text" placeholder="Name" value={this.state.name} onChange={(e) => this.handleChange(e, "name")} /><br />
                <button onClick={() => this.fnClik()}> ADD </button>
                <Stud data={this.state.userArray} title={"Student list"} />
            </div>
        )
    }
}

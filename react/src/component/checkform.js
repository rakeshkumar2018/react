import React from 'react'

export class CheckForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      errors: {},
      fields: {}
    }
  }
  //Input recive and set the state
  handleChange = (e, type) => {
    this.setState({
      fields: {
        ...this.state.fields,
        [type]: e.target.value
      }
    })

  }
  //Validate function
  handleValidate() {
    let fields = this.state.fields
    let errors = {}
    let isValid = true
    if (!fields["name"]) {
      isValid = false
      errors["name"] = "Can't be empty"
    }
    if (typeof fields["name"] !== 'undefined') {
      if (!fields["name"].match(/^[a-zA-Z]+$/)) {
        isValid = false
        errors["name"] = "Name can be only letters"
      }
    }
    if (!fields['phone']) {
      isValid = false
      errors['phone'] = "Enter phone No"
    }
    if (typeof fields['phone'] !== 'undefined') {
      if (!fields['phone'].match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)) {
        isValid = false
        errors['phone'] = "Enter valid phone no"
      }
    }
    this.setState({ errors: errors });
    return isValid;
    alert(isValid)

  }
  //Submit button
  fnSubmit = () => {
    if (this.handleValidate()) {
      alert("Form submited")
    } else {
      alert("Form had error occured")
    }
  }
  render() {
    return (
      <div>
        <h2> Welcome to form. </h2>
        <input type="text" value={this.state.fields.name} size="30" placeholder="Name" onChange={(e) => this.handleChange(e, "name")} /><br />
        {/* <input type="text" size="30" placeholder="Name" onChange={this.handleChange.bind(this, "name")} value={this.state.fields.name} /> */}

        <span style={{ color: 'red' }}> {this.state.errors["name"]}  </span><br />
        <input type="text" value={this.state.fields.phone} size="30" placeholder="Phone" onChange={(e) => this.handleChange(e, "phone")} /><br />
        <span style={{ color: 'red' }}> {this.state.errors["phone"]}  </span><br />

        <input type="button" value="Submit" onClick={() => this.fnSubmit()} />

      </div>
    )
  }
}

export default CheckForm

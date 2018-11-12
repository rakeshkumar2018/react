import React from 'react';
class FormValidation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fields: {},

      errors: {}
    }
  }

  handleValidation() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    //Name
    if (!fields["name"]) {
      formIsValid = false;
      errors["name"] = "Cannot be empty";
    }

    if (typeof fields["name"] !== "undefined") {
      if (!fields["name"].match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors["name"] = "Only letters";
      }
    }

    //Email
    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "Cannot be empty";
    }

    if (typeof fields["email"] !== "undefined") {
      let lastAtPos = fields["email"].lastIndexOf('@');
      let lastDotPos = fields["email"].lastIndexOf('.');

      if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
        formIsValid = false;
        errors["email"] = "Email is not valid";
      }
    }

    this.setState({ errors: errors });
    return formIsValid;
  }

  contactSubmit(e) {
    e.preventDefault();

    if (this.handleValidation()) {
      alert("Form submitted");
    } else {
      alert("Form has errors.")
    }

  }

  handleChange(field, e) {
    // let fields = this.state.fields;
    // fields[field] = e.target.value;
    // this.setState({ fields: fields });
    this.setState({
      fields: {
        ...this.state.fields,
        [field]: e.target.value
      }
    })
  }


  contactSubmit = (e) => {
    // alert("Submit")
    e.preventDefault();

    if (this.handleValidation()) {
      alert("Form submitted");
    } else {
      alert("Form has errors.")
    }
  }

  render() {

    return (
      <div>
        <form name="contactform" className="contactform" >

          <div className="col-md-6">
            <fieldset>
              <input type="text" size="30" placeholder="Name" onChange={this.handleChange.bind(this, "name")} value={this.state.fields.name} />
              {/* <input type="text" size="30" placeholder="Name" onChange={(e) => this.handleChange(e, "name")} value={this.state.fields["name"]} /> */}

              <span style={{ color: "red" }}>{this.state.errors.name}</span>
              <br />
              <input type="text" size="30" placeholder="Email" onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"]} />
              <span style={{ color: "red" }}>{this.state.errors["email"]}</span>
              <br />
              <input type="text" size="30" placeholder="Phone" onChange={this.handleChange.bind(this, "phone")} value={this.state.fields["phone"]} />
              <br />
              <input type="text" size="30" placeholder="Address" onChange={this.handleChange.bind(this, "address")} value={this.state.fields["address"]} />
              <br />
              <input type="button" value="Submit" onClick={this.contactSubmit.bind()} />

            </fieldset>
          </div>

        </form>
      </div>
    )
  }
}
export default FormValidation;

      // -------------------------------------------------------------------------------------------
      // <div>
      //   <form name="contactform" className="contactform" >

      //     <div className="col-md-6">
      //       <fieldset>
      //         {/* <input type="text" size="30" placeholder="Name" onChange={(e) => this.handleChange(e, "name")} value={this.state.fields.name} /> */}
      //         <input type="text" size="30" placeholder="Name" onChange={(e) => this.handleChange(e, "name")} value={this.state.fields["name"]} />

      //         <span style={{ color: "red" }}>{this.state.errors["name"]}</span>
      //         <br />
      //         <input type="text" size="30" placeholder="Email" onChange={(e) => this.handleChange(e, "email")} value={this.state.fields["email"]} />
      //         {/* <span style={{ color: "red" }}>{this.state.errors["email"]}</span> */}
      //         <br />
      //         <input type="text" size="30" placeholder="Phone" onChange={(e) => this.handleChange(e, "phone")} value={this.state.fields["phone"]} />
      //         <br />
      //         <input type="text" size="30" placeholder="Address" onChange={(e) => this.handleChange(e, "address")} value={this.state.fields["address"]} />
      //         <br />
      //         <input type="button" value="Submit" onClick={(e) => this.contactSubmit(e)} />

      //       </fieldset>
      //     </div>

      //    </form>
      //  </div>



  // handleChange = (e, type) => {

  //   this.setState({
  //     fields: {
  //       ...this.state.fields
  //       [type] = e.target.value
  //     }

  //   })
  //   console.log(this.state.fields.email)
  //   console.log(this.state.fields.name);


  // }

  // handleValidation = () => {
  //   let fields = this.state.fields;
  //   let errors = {};
  //   let formIsValid = true;
  //   console.log(fields.name)
  //   console.log(fields.email)

  //Name
  // if (!this.state.fields.name) {
  //   formIsValid = false;
  //   errors.name = "Cannot be empty";
  // }

  // if (typeof fields.name !== "undefined") {
  //   if (!fields.name.match(/^[a-zA-Z]+$/)) {
  //     formIsValid = false;
  //     errors.name = "Only letters";
  //   }
  // }
  // ----------------------------------------------------------------------------------
  //   //Name
  //   if (!fields["name"]) {
  //     formIsValid = false;
  //     errors["name"] = "Cannot be empty";
  //   }

  //   if (typeof fields["name"] !== "undefined") {
  //     if (!fields["name"].match(/^[a-zA-Z]+$/)) {
  //       formIsValid = false;
  //       errors["name"] = "Only letters";
  //     }
  //   }

  //   this.setState({ errors: errors });
  //   return formIsValid;
  // }

import React, { Component } from "react";

class PropsLearning extends Component {
  state = {
    inputValues: {
      firstName: "",
      lastName: "",
      fatherName: "",
    },
  };
  handleChange = (event) => {
    console.log(this.state.inputValues);
    this.setState({ inputValues: {
         ...this.state.inputValues,
        [event.target.name]: event.target.value,
    }});
  };

  handleCLick = () => {
    console.log("You Clicked Me");
  };
  render() {
        console.log(this.state.inputValues);
    return (
      <div>
        <form action="">
          Form
          <label htmlFor="">First Name</label>
          <input
            type="text"
            className="form-control"
            name="firstName"
            value={this.state.inputValues.firstName}
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="">Last Name</label>
          <input
            type="text"
            className="form-control"
            name="lastName"
            value={this.state.inputValues.lastName}
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="">Father Name</label>
          <input
            type="text"
            className="form-control"
            name="fatherName"
            value={this.state.inputValues.fatherName}
            onChange={this.handleChange}
          /><br/>
          <button className="btn btn-primary" onClick={this.handleCLick}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default PropsLearning;

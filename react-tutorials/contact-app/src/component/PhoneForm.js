import React, { Component } from "react";

class PhoneForm extends Component {
  state = {
    name: "",
    phone: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onCreate(this.state);
    this.setState({
      name: "",
      phone: "",
    });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <ul>
          <li>
            <input
              name="name"
              placeholder="name"
              onChange={this.handleChange}
              value={this.state.name}
            />
          </li>
          <li>
            <input
              name="phone"
              placeholder="phone"
              onChange={this.handleChange}
              value={this.state.phone}
            />
          </li>
          <li>
            <button type="submit">Submit</button>
          </li>
        </ul>
      </form>
    );
  }
}

export default PhoneForm;

import React, { Component } from 'react';

class PhoneForm extends Component {
  state = {
    name: '',
    phone: '',
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onCreate(this.state);
    this.setState({
      name: '',
      phone: '',
    })
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="name" placeholder="name" onChange={this.handleChange} vlaue={this.state.name}/>
        <input type="text" name="phone" placeholder="Phone number" onChange={this.handleChange} value={this.state.phone}/>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default PhoneForm;
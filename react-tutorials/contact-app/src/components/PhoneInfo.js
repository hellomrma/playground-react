import React, { Component } from 'react';

class PhoneInfo extends Component {
  render() {
    const { name, phone, id } = this.props.info;
    const style = {
      border: '1px solid black',
      padding: '8px',
      margin: '8px',
    }
    return (
      <div style={style}>
        <div>{name}</div>
        <div>{phone}</div>
        <div>{id}</div>
      </div>
    );
  }
}

export default PhoneInfo;
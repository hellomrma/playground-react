import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';
import './App.css';

class App extends Component {
  
  id = 0;

  state = {
    information: [],
  }
  handleCreate = (data) => {
    const { information } = this.state;
    this.setState({
      information: information.concat({
        ...data,
        id: this.id++
      })
    })
  }

  render() {
    return (
      <div>
        <PhoneForm onCreate={this.handleCreate} />
        <p>{JSON.stringify(this.state.information)}</p>
      </div>
    );
  }
}

export default App;
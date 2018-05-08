import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';
import { addGuest, removeGuest } from './ducks/guestList'

class App extends Component {
  constructor(){
    super()
    this.state = {
      input: ''
    }
    this.handleInput = this.handleInput.bind( this );
    this.addClick = this.addClick.bind( this );
  }
  handleInput(element){
    this.setState({ input: element })
  }
  addClick(element){
    element.preventDefault();
    this.props.addGuest(this.state.input);
    this.setState({input: ''});
  }

  render() {
    return (
      <div className="App">
        <h1>DevMountain Hackathon</h1>
        <h3>Guest List:</h3>
        <ul>
          {this.props.list.map( (guest, i) => {
            return (
              <div key={i} className="list-item">
                <li>{guest}</li>
                <button type="" className="" onClick={ () =>  this.props.removeGuest(i) }>Remove</button>
              </div>
            )
          })}
        </ul>
        <div className="add-guest">
          Add guest: <input type="" className="" onChange={ element => this.handleInput( element.target.value)}/>
          <button type="" className="" onClick={ i => this.addClick(i) }>Add</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    list: state.guests
  };
}

export default connect(mapStateToProps, {addGuest, removeGuest})(App);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import { getPeople, getPlanets, getStarships } from './ducks/star_wars';

class App extends Component {
  render() {
    
    const newPeople = this.props.getPeople;

    const people = this.props.people.map( (person, i) => {
      return <p key={i}>{ person.name }</p>
    })
    const planets = this.props.planets.map( (planet,i) => {
      return <p key={i}>{ planet.name }</p>
    })
    const starships = this.props.starships.map( (starship, i) => {
      return <p key={i}>{ starship.name }</p>
    })

    return (
      <div className='App'>
        <h1>Star Wars Stuff!</h1>
        <div className='lists-wrap'>
          <div>
            <button 
              onClick={this.props.getPeople}
              >Get correct people</button>
            <h3>Characters:</h3>
            { people }
          </div> 
          <div>
            <button
            onClick={this.props.getPlanets}>Get correct planets</button>
            <h3>Planets:</h3>
            { planets }
          </div> 
          <div>
            <button
            onClick={this.props.getStarships}>Get correct starships</button>
            <h3>Starships:</h3>
            { starships }
          </div> 
        </div> 
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    people: state.people,
    planets: state.planets,
    starships: state.starships
  }
}

export default connect(mapStateToProps, { getPeople, getPlanets, getStarships })(App);

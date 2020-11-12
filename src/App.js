import React, { Component } from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import Button from './Button';

class App extends Component {
  constructor(props) {
    super();
    this.state = { stateIndex: 0 };
  }

    handleClick = () => {
      const lastIndex = pokemons.length - 1;
      const { stateIndex } = this.state;
      if (stateIndex < lastIndex) {
      this.setState((previousState, _props) => ({
        stateIndex: previousState.stateIndex + 1,
      }));
      } else {
      this.setState(() => ( { stateIndex: 0 }));
      }
    }

  render() {
    const stateIndex = this.state.stateIndex;
    const pokemon = pokemons.find((pokemon, index) => index === stateIndex);
    return (
      <div className="App">
        <h1> Pokedex </h1>
        <Button buttonText=">>>" handleClick={this.handleClick} />
        <Pokedex pokemon={pokemon} />
      </div>
    );
  }
}

export default App;
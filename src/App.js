import React, { Component } from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import Button from './Button';

class App extends Component {
  constructor(props) {
    super();
    this.state = { 
      stateIndex: 0 ,
      filter: 'Fire',
      all: true
    };
  }

    handleClick = () => {
      const { stateIndex, filter, all } = this.state;
      const filteredPokemons = pokemons.filter(pokemon => pokemon.type === filter);
      const lastIndex = all ? pokemons.length - 1 : filteredPokemons.length - 1;
      if (stateIndex < lastIndex) {
      this.setState((prev, _props) => ({
        stateIndex: prev.stateIndex + 1,
      }));
      } else {
      this.setState(() => ( { stateIndex: 0 }));
      }
    }

    changeFilter = ({ target }) => {
      const { innerText } = target;
      this.setState(() => ({ 
        filter: innerText,
        all: false, 
        stateIndex: 0
      }))
    }

    switchToAll = () => this.setState(() => ({ all: true }));

  render() {
    const { stateIndex, filter, all } = this.state;
    const filteredPokemons = pokemons.filter(pokemon => pokemon.type === filter);
    const byFilter = filteredPokemons.find((pokemon, index) => index === stateIndex);
    const byAll = pokemons.find((pokemon, index) => index === stateIndex);
    const pokemon = all ? byAll : byFilter;
    return (
      <div className="App">
        <h1> Pokedex </h1>
        <Button buttonText=">>>" handleClick={this.handleClick} />
        <Button buttonText="All" handleClick={this.switchToAll} />
        <Button buttonText="Fire" handleClick={this.changeFilter} />
        <Button buttonText="Psychic" handleClick={this.changeFilter} />
        <Pokedex pokemon={pokemon} />
      </div>
    );
  }
}

export default App;
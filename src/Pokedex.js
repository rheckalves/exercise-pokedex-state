import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
    constructor(props) {
        super();
        this.state = { stateIndex: 0 };
      } 

    render() {
        const stateIndex = this.state.stateIndex;
        const pokemon = this.props.pokemons.find((pokemon, index) => index === stateIndex);
        return (
            <div className="pokedex">
                <Pokemon key={pokemon.id} pokemon={pokemon} />)
            </div>
        );
    }
}

export default Pokedex;
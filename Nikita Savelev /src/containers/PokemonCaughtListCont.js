import React, {Component} from 'react';

import PokemonSingle from './PokemonSingle'
import Load from '../services/services';

export class PokemonCaughtListCont extends Component {

  state = {
    pokemons: [],
  };

  loadCaught = Load.caught.bind(this);

  componentDidMount = () => {
    this.loadCaught();
  };

  render() {
    const pokemons = this.state.pokemons.map((pokemon) => {
      return <PokemonSingle key={pokemon.id} id={pokemon.id}
                            name={pokemon.name} caught={pokemon.caught}/>
    });

    return (
      <React.Fragment>
        <div className="pokemons">
          {pokemons}
        </div>
      </React.Fragment>
    );
  }

}

export default PokemonCaughtListCont;


import React, {Component} from 'react'
import {Link} from 'react-router-dom';

import {PokemonSingle} from "./PokemonSingle";
import Services from '../services/services';

import './PokemonList.css'

export class PokemonListCont extends Component {

  services = Services.show.bind(this);

  constructor(props) {
    super(props);
    this.state = {
      pokemons: [],
      pid: []
    }
  }

  componentDidMount() {
    this.services();
  }

  loadMorePokemons = (e) => {
    fetch(`http://localhost:4000/pokemons?_start=${this.state.pokemons.length}&_end=${this.state.pokemons.length + 4}`)
      .then(r => r.json())
      .then((json) => {
        this.setState(function (prev) {
          return {
            pokemons: [...this.state.pokemons, ...json],
            pid: [...prev.pid, ...json.map((data) => data.id)]
          }
        });
      });
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
          <Link to="/" onClick={this.loadMorePokemons}>
            <h3 className="load-btn">Load more</h3>
          </Link>
        </div>
      </React.Fragment>
    )
  }
}


export default PokemonListCont;


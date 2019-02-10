import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import './PokemonComponent.css'

export class PokemonComponent extends Component {
  render() {

    return (
      <div className="singlePokemon">
        <div className="singlePokemon-wrapper">
          <Link to={`/pokemon/${this.props.id}`}>
            <h3>{this.props.name}</h3>
          </Link>
          <Link to={`/pokemon/${this.props.id}`}>
            <img src={window.location.origin + `/pokemons/${this.props.id}.png`}
                 alt="Pokemon"
                 height="250px"/>
          </Link>
        </div>
        {this.props.buttonShow()}
      </div>
    )
  }
}

export default PokemonComponent;


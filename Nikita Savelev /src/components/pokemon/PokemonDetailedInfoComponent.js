import React, {Component} from 'react'

import './PokemonDetailedInfoComponent.css'


export class PokemonDetailedInfoComponent extends Component {
  render() {
    const {name, pId} = this.props;
    return (
      <React.Fragment>
        <div className="detailed-pokemon">
          <h3>{name}</h3>
          <img src={window.location.origin + `/pokemons/${pId}.png`} alt="Pokemon" height="300px"/>
          <p> ID: {pId} </p>
        </div>
      </React.Fragment>
    )
  }
}

export default PokemonDetailedInfoComponent;



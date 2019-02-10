import React, {Component} from 'react'

import PokemonDetailedInfoComponent from '../components/pokemon/PokemonDetailedInfoComponent'
import Load from '../services/services';

export class PokemonDetailedInfoCon extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pokemons: [],
      pId: this.props.match.params.id,
    }
  }

  loadOne = Load.showOne.bind(this);

  componentDidMount() {
    this.loadOne(this.state.pId);
  }

  statusShow() {
    if (!this.state.caught) {
      return (
        <React.Fragment>
          <p>Pokemon wasn't caught yet</p>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <p>Pokemon was caught at {this.state.time} {this.state.date}</p>
        </React.Fragment>
      );
    }
  }

  render() {

    return (
      <React.Fragment>
        <PokemonDetailedInfoComponent {...this.state}/>
        {this.statusShow()}
      </React.Fragment>
    )
  }
}

export default PokemonDetailedInfoCon;





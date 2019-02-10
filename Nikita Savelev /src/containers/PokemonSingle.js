import React, {Component} from 'react';

import PokemonComponent from '../components/pokemon/PokemonComponent'
import Load from '../services/services';

export class PokemonSingle extends Component {

  catchPok = Load.catch.bind(this);

  buttonShow() {
    if (!this.props.caught) {
      return (
        <React.Fragment>
          <button className="catchBtn" onClick={(event) => {
            this.catchPok(this.props.id, this.props.name, event);
          }}><p>Catch! </p>
          </button>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <p>Already caught!</p>
        </React.Fragment>
      );
    }
  }

  render() {

    return (
      <React.Fragment>
        <PokemonComponent {...this.props} buttonShow={this.buttonShow.bind(this)}/>
      </React.Fragment>
    )
  }
}

export default PokemonSingle;


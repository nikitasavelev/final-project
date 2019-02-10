import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Header from '../header/Header';
import PokemonListCont from '../../containers/PokemonListCont'
import PokemonDetailedInfoCont from '../../containers/PokemonDetInfoCont'
import PokemonCaughtListCont from '../../containers/PokemonCaughtListCont';

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header/>
          <Route exact path="/" component={PokemonListCont}/>
          <Route path="/pokemon/:id" component={PokemonDetailedInfoCont}/>
          <Route path="/catched_pokemons/" component={PokemonCaughtListCont}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

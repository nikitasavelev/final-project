import React from 'react';
import {Link} from 'react-router-dom';

import './Header.css';

export class Header extends React.Component {
  render() {
    return (
      <header>
        <Link to='/'>
          <h1 className="title"> Pokedex</h1>
        </Link>
        <nav>
          <Link className="firstLink" to='/'>Home</Link>
          <Link className="secondLink" to="/catched_pokemons">Your Pokemons</Link>
        </nav>
      </header>
    )
  }
}

export default Header;
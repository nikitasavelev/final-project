export default {
  show: function () {
    fetch('http://localhost:4000/pokemons?_limit=4')
      .then(r => r.json())
      .then((json) => {
        this.setState(function () {
          return {
            pokemons: [...json],
            id: [...json.map((data) => data.id)]
          }
        })
      })
      .catch(error => console.log(error))
  },

  caught: function () {
    let {pokemons} = this.state;
    fetch(`http://localhost:4000/pokemons?q=true`)
      .then(r => r.json())
      .then(result => this.setState({
          pokemons: pokemons.concat(result)
        })
      );

  },

  catch: function (id, name, e) {
    fetch(`http://localhost:4000/pokemons/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        caught: true,
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString()
      })
    });
    e.target.disabled = "disabled";
  },

  showOne: function (id) {
    fetch(`http://localhost:4000/pokemons/${id}`)
      .then(r => r.json())
      .then(result => this.setState({
        name: result.name,
        caught: result.caught,
        date: result.date,
        time: result.time
      }));
  }
}



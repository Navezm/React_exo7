import React, {Component} from 'react';
import Article from './Article';

class App extends Component {
  state = {
    name: "Lunette",
    prix: "10"
  };
  render(){
    return (
      <div className="App">
        <Article price="29">Chemise</Article>
        <Article price="35">Pantalon</Article>
        <Article price={this.state.prix}>{this.state.name}</Article>
      </div>
    );
  };
};

export default App;
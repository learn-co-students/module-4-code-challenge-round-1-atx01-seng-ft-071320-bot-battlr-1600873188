import React, { Component } from "react";
import BotsPage from "./containers/BotsPage";
import "./App.css";

class App extends Component {
  
  state = {
    bots: [],
  };

  componentDidMount() {
    fetch('http://localhost:6001/bots')
      .then(res => res.json())
      .then((bots) => this.setState({bots}));
  }
  render() {
    return (
      <div className="App">
        <BotsPage 
        bots = {this.state.bots}
        />
      </div>
    );
  }
}
const BotsPage=({
  bots,
})

export default App;
 
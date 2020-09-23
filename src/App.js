import React, { Component } from "react";
import BotsPage from "./containers/BotsPage";
import "./App.css";

const URL = 'http://localhost:6001/bots'

class App extends Component {
  constructor(){
    super();
    this.state={
      botList: [],
      armyList: []
    }
  }

  componentDidMount(){
    fetch(URL).then(req=>req.json()).then(botList=>this.setState({ botList }))
  }

  addBot = (id) => {
    const newBot = this.state.botList.filter(bot => bot.id === id);
    this.setState({armyList: [...this.state.armyList, newBot]})
  }

  deleteBot = (id) => {
    fetch(`${URL}/${id}`, 
    {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "DELETE",
      body: JSON.stringify ({ id: id })
    })
    window.location.reload(false);
  }

  render() {
    return (
      <div className="App">
        <BotsPage botList={this.state.botList} deleteBot={this.deleteBot} addBot={this.addBot} armyList={this.state.armyList}/>
      </div>
    );
  }
}

export default App;

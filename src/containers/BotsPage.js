import React, { Component } from "react";
import YourBotArmy from './YourBotArmy.js';
import BotCollection from './BotCollection.js';

class BotsPage extends Component {
  
  constructor() {
    super()
    this.state = {
      bots: [],
      loaded: false,
      army: []
    }
  }

  getAllBots = () => {
    fetch('http://localhost:6001/bots').then(res => res.json()).then(
      (result) => {
        this.setState({
          bots: result,
          loaded: true
        });
      }
    )
  }

  addToArmy = (name) => {
    const findBot = this.state.bots.filter(bot => bot.name.includes(name));

    this.setState(previousState => {
      return {
        army: previousState.army.concat(findBot)
      }
    })
  }


  deleteBot = (id) => {
    fetch(`http://localhost:6001/bots/${id}`, {
      method: "DELETE",
    })
    .then(res => res.json())
    .then(this.getAllBots)
  }

  removeFromArmy = (clicked) => {
    let array = this.state.army

    if (clicked === true) {
      console.log('shoudl remove right now')
    }
  }


  render() {


    if (this.state.loaded === false) {
      this.getAllBots();
    }


    return (
      <div>
        <YourBotArmy army={this.state.army} handleCardClick={this.removeFromArmy} />
        <BotCollection bots={this.state.bots} handleCardClick={this.addToArmy} handleDelete={this.deleteBot} />
      </div>
    )
  }
}

export default BotsPage;





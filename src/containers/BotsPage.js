import React, { Component } from "react";
import BotCollection from '../containers/BotCollection'
import YourBotArmy from '../containers/YourBotArmy'

class BotsPage extends Component {
  //start here with your code for step one

  state = {
    bots: [],
    inArmy: false
  }

  componentDidMount = () => {
    fetch("http://localhost:6001/bots").then(res => res.json())
    .then(bots => this.setState({ bots }))
  };

  addToArmy = (bot) => {
    if (!bot.inArmy) {
    const addedBot = this.state.bots.map(b => {
      const newBot = {...b}
      if (b.id === bot.id) {
        newBot.inArmy = true;
      }
      return newBot
    })
    this.setState({ bots: addedBot })
  } else if (bot.inArmy){
    const addedBot = this.state.bots.map(b => {
      const newBot = {...b}
      if (b.id === bot.id) {
        newBot.inArmy = false;
      }
      return newBot
    })
    this.setState({ bots: addedBot })
    }
  }

  removeBot = (bot) => {
    fetch (`http://localhost:6001/bots/${bot.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
    }).then(res => res.json())
    this.componentDidMount()
  }

  render() {
    return (<div>
      <YourBotArmy army={this.state.bots.filter(bot => bot.inArmy)} addToArmy={this.addToArmy}
      removeBot={this.removeBot} />
      <BotCollection
      addToArmy={this.addToArmy}
      bots={this.state.bots}
      removeBot={this.removeBot} />
      </div>)
  }
}

export default BotsPage;

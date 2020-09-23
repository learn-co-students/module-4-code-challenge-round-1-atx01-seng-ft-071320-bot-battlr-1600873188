import React, { Component } from "react";
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';

class BotsPage extends Component {
  //start here with your code for step one

  state = {
    bots: []
    
  }

  componentDidMount() {
    this.fetchBots()
  }

  fetchBots() {
    fetch("http://localhost:6001/bots")
      .then(res => res.json())
      .then(bots => this.setState({ bots: bots }))
  }

  joinArmy = (bots) => {
    let botArmy = this.state.bots.map(bot => {
      let newBot = { ...bot }
      if (bots.id === bot.id) {
        newBot.army = true
      }
        return newBot
    })
    this.setState({ bots: botArmy })
  }

  removeBot = (event) => {
    console.log("removing Bot")
    event.preventDefault()
  }


  render() {
    return <div>
      <BotCollection joinArmy={this.joinArmy} bots={this.state.bots} />
      <YourBotArmy removeBot={this.removeBot} botArmy={this.state.bots.filter(bot => bot.army)}/>
    </div>;
  }
}

export default BotsPage;

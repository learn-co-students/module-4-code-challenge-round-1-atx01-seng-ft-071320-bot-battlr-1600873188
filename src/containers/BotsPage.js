import React, { Component } from "react";
import YourBotArmy from './YourBotArmy';
import BotCollection from './BotCollection';

class BotsPage extends Component {
  //start here with your code for step one
  constructor() {
    super()
    this.state = {
      allBots: [],
      botArmy: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:6001/bots')
      .then(response => response.json())
      .then(data => {
        this.setState({
          allBots: data
        })
      });
  }

  addToArmy = (bot) => {
    if (this.state.botArmy.includes(bot) === false) {
      this.setState({
        botArmy: [...this.state.botArmy, bot]
      })
    }
  }

  removeFromArmy = (removedBot) => {
    this.setState({
      botArmy: this.state.botArmy.filter(bot => bot !== removedBot)
    })
  }

  removeFromCollection = (removedBot) => {
    fetch(`http://localhost:6001/bots/${removedBot.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    this.setState({
      allBots: this.state.allBots.filter(bot => bot !== removedBot),
      botArmy: this.state.botArmy.filter(bot => bot !== removedBot)
    })
  }


  render() {
    return <div>
      <YourBotArmy botArmy={this.state.botArmy} removeFromArmy={this.removeFromArmy} removeFromCollection={this.removeFromCollection} />
      <BotCollection allBots={this.state.allBots} addToArmy={this.addToArmy} removeFromCollection={this.removeFromCollection} />
    </div>;
  }
}

export default BotsPage;

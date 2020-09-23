import React, { Component } from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";
const BOTS = 'http://localhost:6001/bots'


class BotsPage extends Component {
  //start here with your code for step one
  constructor() {
    super()

    this.state = {
      bots: [],
      army: []
    }
  }


  componentDidMount() {
    fetch(BOTS)
      .then(response => response.json())
      .then((bots) => this.setState({ bots }))
  }

  addBotToArmy = (bot) => {

    //  e.target.style.pointerEvents = 'none';
     
    // bot.inArmy = true;
    // const newArmy = this.state.army.map((b) => {
    //   const newArmy = []
    //   if (bot.id !== b.id) {
    //     newArmy.push(b)
    //   }
    //   return newArmy
    // })

    this.setState({
      army: [...this.state.army, bot]
    })
  }


  releaseBot = (bot) => {
    // console.log('releasing', bot.name)
    this.setState({
      army: this.state.army.filter((b) => b.id !== bot.id)
    })
  }


  deleteBot = (bot) => {
    const currentBots = this.state.bots;
    const currentArmy = this.state.army;

    this.setState({
      bots: currentBots.filter(b => b.id !== bot.id),
      army: currentArmy.filter(b => b.id !== bot.id)
    });

    let id = bot.id
    fetch(`http://localhost:6001/bots/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      }
    })
    // .then(r => r.json())
    // .then(console.log)
  }





  render() {
    return (
      <div>
        <YourBotArmy army={this.state.army} releaseBot={this.releaseBot} deleteBot={this.deleteBot} />
        <BotCollection bots={this.state.bots} addBotToArmy={this.addBotToArmy} deleteBot={this.deleteBot} />
      </div>
    )
  }
}

export default BotsPage;


import React, { Component } from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"

class BotsPage extends Component {
  //start here with your code for step one
  componentDidMount (){
    fetch("http://localhost:6001/bots")
    .then(res => res.json())
    .then(botsData => this.setState( {bots: botsData}
    ))
  }

  state = {
    bots: [],
    botArmy:[]
  }
  
  addToBotArmy = (bot) => {
    const foundSameBot = this.state.botArmy.find(foundBot => foundBot.id === bot.id)
    console.log(foundSameBot)
    if (!foundSameBot){
      this.setState({ botArmy: [...this.state.botArmy, bot]})
    } else {
      const armyBotsSpliced = [...this.state.botArmy]
      console.log(armyBotsSpliced.splice(foundSameBot, 1))
      this.setState({ botArmy: armyBotsSpliced})
      console.log(this.state.botArmy)
    }
  }

  deleteBot = (bot) => {
    console.log(bot.id)
    fetch(`http://localhost:6001/bots/${bot.id}`, {
      method: "DELETE"
    })
    .then(fetch("http://localhost:6001/bots")
    .then(res => res.json())
    .then(botsData => this.setState( {bots: botsData}
    )))
  }

  render() {
    return <div>
      <YourBotArmy botArmy = {this.state.botArmy} addToBotArmy = {this.addToBotArmy} deleteBot = {this.deleteBot} />
      <BotCollection bots = {this.state.bots} addToBotArmy = {this.addToBotArmy} deleteBot = {this.deleteBot} />,
      </div>;
  }
}

export default BotsPage;

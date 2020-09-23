import React, { Component } from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
import BotSpecs from '../components/BotSpecs'
import SortBar from './SortBar'

class BotsPage extends Component {
  state = {
    bots: [],
    army: [],
    toggled: false,
    showBot: {}
  }


  componentDidMount() {
    this.fetchBots()
  }

  fetchBots = () => {
    fetch('http://localhost:6001/bots')
      .then(resp => resp.json())
      .then(bots => this.setState({ bots }))
  }

  addBot = (bot) => {
    if (!this.state.army.includes(bot)) {
      let newArmy = [...this.state.army, bot]
      let newBots = this.state.bots.filter(b => b.id !== bot.id)
      this.setState({
        bots: newBots,
        army: newArmy,
        toggled: false
      })
    }
  }

  removeBot = (bot) => {
    let newArmy = this.state.army.filter(b => b.id !== bot.id)
    let newBots = [...this.state.bots, bot]
    this.setState({
      army: newArmy,
      bots: newBots
    })
  }

  deleteBot = (event, bot) => {
    event.stopPropagation()
    let newBots = this.state.bots.filter(b => b.id !== bot.id)
    this.setState({ bots: newBots })
    //If the bot is in the army when deleted, remove it from army 
    if (this.state.army.includes(bot)) {
      let newArmy = this.state.army.filter(b => b.id !== bot.id)
      this.setState({ army: newArmy })
    }
    this.deleteFetch(bot.id)
  }

  deleteFetch = (id) => {
    let configObj = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
    }
    fetch(`http://localhost:6001/bots/${id}`, configObj)
  }

  showBotSpecs = (bot) => {
    this.setState({
      showBot: bot,
      toggled: true
    })
  }

  showCollection = () => {
    this.setState({ toggled: false })
  }

  sortBots = (attribute) => {
    this.fetchBots()
    setTimeout(() => {
      let newBots = [...this.state.bots]
      if (attribute === "health") {
        newBots.sort((a, b) => (a.health > b.health) ? -1 : 1)
      } else if (attribute === "damage") {
        newBots.sort((a, b) => (a.damage > b.damage) ? -1 : 1)
      } else if (attribute === "armor") {
        newBots.sort((a, b) => (a.armor > b.armor) ? -1 : 1)
      }
      this.setState({
        bots: newBots
      })
    }, 100)

  }

  render() {
    return (
      <div>
        <SortBar sortBots={this.sortBots} />
        <YourBotArmy deleteBot={this.deleteBot} bots={this.state.army} removeBot={this.removeBot} />
        {this.state.toggled ? <BotSpecs addBot={this.addBot} showCollection={this.showCollection} bot={this.state.showBot} /> : <BotCollection showBotSpecs={this.showBotSpecs} deleteBot={this.deleteBot} bots={this.state.bots} />}
      </div>
    )
  }
}

export default BotsPage;

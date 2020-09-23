import React, { Component } from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

const API = "http://localhost:6001/bots"

class BotsPage extends Component {

  state = {
    bots: [],
    inlistedBots: []
  }

  componentDidMount() {
    this.fetchBots()
  }

  fetchBots = () => {
    fetch(`${API}`).then(res => res.json()).then(data => this.setState({ bots: data }))
  }

  inlistBot = (botId) => {
    let bots = [...this.state.bots]
    let desiredBot = bots.filter(b => b.id === botId)[0]
    if (desiredBot.inlisted !== true) {
      let newBots = bots.map(b => {
        let newBot = { ...b }
        if (newBot.id === botId) {
          newBot.inlisted = true
        }
        return newBot
      })
      this.setState({ bots: newBots })
      let inlistedBots = this.state.inlistedBots
      inlistedBots.push(desiredBot)
      this.setState({ inlistedBots: inlistedBots})
      console.log(this.state.inlistedBots)
    } else {
      this.dischargeBot(botId)
    }
  }

  dischargeBot = (botId) => {
    let bots = [...this.state.bots]
    let dischargedBot = bots.filter(b => b.id === botId)
    let newBots = bots.map(b => {
      let newBot = { ...b }
      if (newBot.id === botId) {
        newBot.inlisted = false
      }
      return newBot
    })
    this.setState({ bots: newBots })
  }

  deleteBot = (botId) => {
    fetch(`${API}/${botId}/`, {method: `DELETE`})
    let bots = [...this.state.bots]
    console.log(bots)
    this.fetchBots()
    let newBots = bots.filter(b => {
       if (b.id !== botId) {
         return b
       }
    })
    console.log(newBots)
    this.setState({ bots: newBots })
  }


  render() {
    let botArmy = this.state.bots.filter(b => b.inlisted === true)
    return <div>
      <YourBotArmy deleteBot={this.deleteBot} inlistBot={this.inlistBot} bots={botArmy} />
      <BotCollection deleteBot={this.deleteBot} bots={this.state.bots} inlistBot={this.inlistBot} />
    </div>;
  }
}

export default BotsPage;

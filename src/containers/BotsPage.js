import React, { Component } from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends Component {
  state = {
    bots: [],
    army: []
  }

  botsURL = 'http://localhost:6001/bots'

  componentDidMount() {
    fetch(this.botsURL).then(r => r.json()).then(bots => this.setState({ bots }))
  }

  editArmy = (armybot) => {
    if (this.state.army.includes(armybot)) {
      this.setState({ army: this.state.army.filter(bot => bot.id !== armybot.id) })
    } else {
      this.setState({ army: [...this.state.army, armybot] })
    }
    console.log(this.state.army)
  }

  deleteBot = (botID) => {
    fetch(`${this.botsURL}/${botID}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    }).then(
      this.setState((prev) => ({ 
        bots: prev.bots.filter(bot => bot.id !== botID),
        army: prev.army.filter(bot => bot.id !== botID) 
      }))
    )
  }


  render() {
    let bots = this.state.bots
    return <div>
      <div>
        <YourBotArmy army={this.state.army} editArmy={this.editArmy} deleteBot={this.deleteBot} />
      </div>
      <div>
        <BotCollection bots={bots} editArmy={this.editArmy} deleteBot={this.deleteBot} />
      </div>;
    </div>
  }
}

export default BotsPage;

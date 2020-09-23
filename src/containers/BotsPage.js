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

  addToArmy = (armybot) => {
    if (this.state.army.includes(armybot)) {
      this.setState({army: this.state.army.filter(bot => bot.id !== armybot.id)})
    } else {
    this.setState({army: [...this.state.army, armybot]})}
    console.log(this.state.army)
  }


  render() {
    let bots = this.state.bots
    return <div>
      <div>
      <YourBotArmy army={this.state.army} addToArmy={this.addToArmy}/>
      </div>
      <div>
        <BotCollection bots={bots} addToArmy={this.addToArmy} />
      </div>;
    </div>
  }
}

export default BotsPage;

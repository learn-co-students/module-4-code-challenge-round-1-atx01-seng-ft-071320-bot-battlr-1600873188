import React, { Component } from "react";
import BotCard from '../components/BotCard'

class BotCollection extends Component {
 renderBots = (bots) => {
   return bots.map(bot => <BotCard key={bot.id} bot={bot} addToArmy={this.props.addToArmy} />)
 }

  render() {
    let bots = this.props.bots
    return (
      <div className="ui four column grid">
        <div className="row">
          {this.renderBots(bots)}
          Collection of all bots
        </div>
      </div>
    );
  }
}

export default BotCollection;

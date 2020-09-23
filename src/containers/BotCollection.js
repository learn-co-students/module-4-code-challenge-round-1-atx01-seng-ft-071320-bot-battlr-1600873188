import React, { Component } from "react";
import BotCard from '../components/BotCard'

class BotCollection extends Component {
  //your code here

  render() {
    return (
      <div className="ui four column grid">
        <div className="row">
          {this.props.bots.map(bot => <BotCard addToArmy={this.props.addToArmy} key={bot.id} bot={bot} removeBot={this.props.removeBot} />)}
          Collection of all bots
        </div>
      </div>
    );
  }
}

export default BotCollection;

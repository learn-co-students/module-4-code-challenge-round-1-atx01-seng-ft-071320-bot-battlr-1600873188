import React, { Component } from "react";
import BotCard from '/Users/cedricpatton/Flatiron/code/Mod4/Code_Challenge/module-4-code-challenge-round-1-atx01-seng-ft-071320-bot-battlr-1600873188/src/components/BotCard.js';

class BotCollection extends Component {
  //your code here

  render() {
    return (
      <div className="ui four column grid">
        <div className="row">
          {this.props.bots.map(bot => {
          return  <BotCard key={bot.id} bot={bot} handleClick={this.props.addBotToArmy} handleButton={this.props.deleteBot} />
          })}
          Collection of all bots
        </div>
      </div>
    );
  }
}

export default BotCollection;

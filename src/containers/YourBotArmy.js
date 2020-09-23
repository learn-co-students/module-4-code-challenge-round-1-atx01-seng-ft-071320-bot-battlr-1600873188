import React, { Component } from "react";
import BotCard from '/Users/cedricpatton/Flatiron/code/Mod4/Code_Challenge/module-4-code-challenge-round-1-atx01-seng-ft-071320-bot-battlr-1600873188/src/components/BotCard.js'

class YourBotArmy extends Component {
  //your bot army code here...

  render() {
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
          Your Bot Army<br/>
            {this.props.army.map(bot => (
              <BotCard key={bot.id} bot={bot} handleClick={this.props.releaseBot} handleButton={this.props.deleteBot} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default YourBotArmy;

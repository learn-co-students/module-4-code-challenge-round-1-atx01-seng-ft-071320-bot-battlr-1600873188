import React, { Component } from "react";
import BotCard from '../components/BotCard'

class YourBotArmy extends Component {
  //your bot army code here...

  render() {
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.props.bots.map(bot=> <BotCard deleteBot={this.props.deleteBot} key={bot.id} bot={bot} removeBot={this.props.removeBot}/>)}
          </div>
        </div>
      </div>
    );
  }
}

export default YourBotArmy;

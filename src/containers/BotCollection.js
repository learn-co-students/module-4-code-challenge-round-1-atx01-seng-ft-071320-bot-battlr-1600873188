import React, { Component } from "react";
import BotCard from '../components/BotCard'

class BotCollection extends Component {
  

  render() {
    return (
      <div className="ui four column grid">
        <div className="row">
          {this.props.bots.map(bot=> <BotCard showBotSpecs={this.props.showBotSpecs} deleteBot={this.props.deleteBot} key={bot.id} bot={bot}/>)}
        </div>
      </div>
    );
  }
}

export default BotCollection;

import React, { Component } from "react";
import BotCard from '../components/BotCard.js';

class BotCollection extends Component {
  //your code here

  render() {
    return (
      <div className="ui four column grid">
        <div className="row">
          {this.props.bots.map(bot => <BotCard  bot={bot} key={bot.id} handleCardClick={this.props.handleCardClick} handleDelete={this.props.handleDelete} />)}
        </div>
      </div>
    );
  }
}

export default BotCollection;




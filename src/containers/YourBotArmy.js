import React, { Component } from "react";
import ArmyBotCard from '../components/ArmyBotCard.js';

class YourBotArmy extends Component {
  //your bot army code here...

  render() {
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.props.army.map(bot => <ArmyBotCard bot={bot} key={bot.id} handleCardClick={this.props.handleCardClick} />)}
          </div>
        </div>
      </div>
    );
  }
}

export default YourBotArmy;



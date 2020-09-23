import React, { Component } from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends Component {
  //your bot army code here...

  render() {
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {/*...and here...*/}
            {this.props.botArmy.map(bot => 
            <BotCard key={bot.id} bot={bot} click={this.props.removeFromArmy} removeFromCollection={this.props.removeFromCollection} />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default YourBotArmy;

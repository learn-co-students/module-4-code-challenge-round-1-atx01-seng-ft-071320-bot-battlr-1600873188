import React, { Component } from "react";
import BotCard from "../components/BotCard";

class BotCollection extends Component {
  //your code here



  render() {
    return (
      <div className="ui four column grid">
        <div className="row">
          {/*...and here..*/}
          {this.props.allBots.map(bot => 
            <BotCard key={bot.id} bot={bot} click={this.props.addToArmy} removeFromCollection={this.props.removeFromCollection} />
            )}
        </div>
      </div>
    );
  }
}

export default BotCollection;

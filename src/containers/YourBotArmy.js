import React, { Component } from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends Component {
  
  handleClick = () => {
    console.log('trying to remove element')
  }

  renderBots = () =>{
    return this.props.bots.map(bot => <BotCard key={bot.id} bot={bot} botClick={this.handleClick}/>)
  }

  render() {
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.renderBots()}
          </div>
        </div>
      </div>
    );
  }
}

export default YourBotArmy;

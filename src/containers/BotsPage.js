import React, { Component } from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends Component {
  //start here with your code for step one
  

  render() {
    return <div>
      <YourBotArmy armyList={this.props.armyList}/>
      <BotCollection botList={this.props.botList} deleteBot={this.props.deleteBot} addBot={this.props.addBot}/>
      </div>;
  }
}

export default BotsPage;

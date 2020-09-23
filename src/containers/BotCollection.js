import React, { Component } from "react";
import BotCard from '../components/BotCard'
import YourBotArmy from '../containers/YourBotArmy.js'
class BotCollection extends Component {
  //your code here

  render() {
    return (
      <div className="ui four column grid">
        <div className="row">
  
         {this.props.robots.map(robot =>(
            <BotCard robot={robot} key={robot.id} addToMyArmy={this.props.addToMyArmy}/>))}
        </div>
      </div>
    );
  }
}

export default BotCollection;

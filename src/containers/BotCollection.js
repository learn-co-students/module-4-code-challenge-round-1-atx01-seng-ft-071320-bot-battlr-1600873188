import React, { Component } from "react";
import BotCard from "../components/BotCard";
import BotSpecs from '../components/BotSpecs';

let thisBot = ""


class BotCollection extends Component {
  //your code here

  constructor() {
    super()
    this.state = {
      showBot: false
    }
  }

  toggleShow = (bot) => {
    thisBot = bot
    console.log(thisBot)
    this.setState({
      showBot: !this.state.showBot
    })
  }


  render() {

    return (
      <div className="ui four column grid">
        <div className="row">
          {/*...and here..*/}
          {this.state.showBot ?
          <BotSpecs bot={thisBot} addToArmy={this.props.addToArmy} toggleShow={this.toggleShow} /> :
          this.props.allBots.map(bot =>
            <BotCard key={bot.id} bot={bot} click={this.toggleShow} removeFromCollection={this.props.removeFromCollection} />
          )
          }
        </div>
      </div>
    );
  }
}

export default BotCollection;

import React, { Component } from "react";
import BotCard from '../components/BotCard'

class YourBotArmy extends Component {
  renderArmy = (army) => {
    return army.map(bot => <BotCard key={bot.id} bot={bot} army={this.props.army} editArmy={this.props.editArmy} deleteBot={this.props.deleteBot} />)
  }

  render() {
    let army = this.props.army
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.renderArmy(army)}
            Your Bot Army
          </div>
        </div>
      </div>
    );
  }
}

export default YourBotArmy;

import React, { Component } from "react";
import BotCard from "../components/BotCard"

class BotCollection extends Component {
  //your code here

  render() {
    return (
      <div className="ui four column grid">
        <div className="row">
          {this.props.bots.map(b => <BotCard bot={b} deleteBot={this.props.deleteBot} inlistBot={this.props.inlistBot} key={b.id}/>)}
        </div>
      </div>
    );
  }
}

export default BotCollection;

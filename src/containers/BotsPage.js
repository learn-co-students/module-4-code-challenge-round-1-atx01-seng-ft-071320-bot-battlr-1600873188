import React, { Component } from "react";
import BotCard from "../components/BotCard"

class BotsPage extends Component {
  constructor(props) {
    this.state = {
      bot: props.bot,
    };
  }
  

  render() {
    return <div>{console.log(this.state.bot)}</div>;
  }
}

export default BotsPage;
 
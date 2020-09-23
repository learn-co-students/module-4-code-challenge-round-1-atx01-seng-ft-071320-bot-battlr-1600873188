import React, { Component } from "react";
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';


class BotsPage extends Component {
  
  state = {
    bots: [],
    botArmy: [],
  }

   componentDidMount(){
     this.fetchBots()
   }

   fetchBots = () => {
     fetch('http://localhost:6001/bots')
      .then(resp=>resp.json())
      .then(bots=>this.setState({bots}))
   }

   addBotToArmy = (botInfo) => {
    let newState = this.state.botArmy
    newState.push(botInfo)
    const uniqueState = [...new Set(newState)]
    this.setState({
       botArmy: uniqueState
     })
   }

  render() {
    return <div>
      <YourBotArmy bots={this.state.botArmy}/>
      <BotCollection bots={this.state.bots} grabBotClicked={this.addBotToArmy}/>
      </div>;
  }
}

export default BotsPage;

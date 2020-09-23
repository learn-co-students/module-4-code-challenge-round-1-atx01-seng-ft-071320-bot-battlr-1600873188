import React, { Component } from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

class BotsPage extends Component {

  state={
    bots:[],
    botArmy:[],
  }

  componentDidMount(){
    fetch('http://localhost:6001/bots')
    .then(resp=> resp.json())
    .then(json=> {
      
      this.setState({bots:json})})
  }
  
  handleClick=(bot)=>{
    let newBot=[bot]
    console.log(bot)
    if (!this.state.botArmy.includes(bot)){
      this.setState({
        botArmy: this.state.botArmy.concat(newBot)
      })
    }

    if (bot.added!=true){
      let newBots=this.state.bots.map((b)=>{
      

        if (bot.id===b.id){
          b.added=true 
        }
        return b
      } )
  
      this.setState({
        bots:newBots
      })
    } else {
      bot.added=false
  
      let botArmy= this.state.botArmy.filter((b)=>  b.id!==bot.id)
    
      this.setState({
        botArmy: botArmy
      })
    }
    }

    deleteBot=(bot)=>{

      // let botArmy= this.state.botArmy.filter((b)=>  b.id!==bot.id)
      let bots= this.state.bots.filter((b)=>  b.id!==bot.id)

      this.setState({
        
        bots: bots
      })

      let configObject= {
        method: 'DELETE',
        headers: {
          "Content-Type": "application/json"
        }
      }

      fetch(`http://localhost:6001/bots/${bot.id}`, configObject)


    }






  render() {
    return <div>
      <YourBotArmy bots={this.state.botArmy} deleteBot={this.deleteBot} handleClick={this.handleClick} />
      <BotCollection bots={this.state.bots} deleteBot={this.deleteBot}  handleClick={this.handleClick}/>
     
      </div>;
  }
}

export default BotsPage;

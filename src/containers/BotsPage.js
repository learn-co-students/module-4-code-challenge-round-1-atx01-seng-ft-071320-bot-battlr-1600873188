import React, { Component } from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";
//that dang time limit
class BotsPage extends Component {
  state = {
    robots: [],
    myArmy: []
  }
  
  
  componentDidMount(){
    fetch('http://localhost:6001/bots')
    .then(res => res.json())
    .then(data => this.setState({robots: data}))
  }
  

  dischargeRobot = (robot) => {
   if (this.state.myArmy.includes(robot) === true){
    const array = this.state.myArmy;
    const index = array.indexOf(robot); 
     array.splice(index)
   }
  }


  addToMyArmy = (robot) =>{
    // const enlistedRobot = this.state.robots.map(soldier => {
    //   const newRobot = {...soldier}
    //   if (robot.id === soldier.id){
    //     newRobot.enlisted === true
    //   }
    //   return newRobot
    // });
    // this.setState({myArmy:

    if (this.state.myArmy.includes(robot) === true){
      null
    }else{
    this.setState({myArmy: [...this.state.myArmy,robot]})
  }}




  render() {
    return <div>
       <YourBotArmy myArmy={this.state.myArmy}
       dischargeRobot={this.dischargeRobot}/>
      <BotCollection 
      robots={this.state.robots}
      addToMyArmy={this.addToMyArmy}/>
     
      {/* put your components here */}
      </div>;
  }
}

export default BotsPage;

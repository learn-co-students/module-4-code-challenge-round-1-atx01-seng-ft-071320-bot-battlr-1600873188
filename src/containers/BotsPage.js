import React from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";
import BotSpecs from "../components/BotSpecs";

class BotsPage extends React.Component {
  //start here with your code for step one
  constructor() {
    super();

    this.state = {
      bots: [],
      enlistedBots: [],
      filteredCollection: [],
      currentBot: null,
      isInArmy: false,
      botArmy: [],
    };
  }

  componentDidMount = () => {
    this.fetchBots();
  };

  fetchBots() {
    fetch('http://localhost:6001/bots')
      .then(res => res.json())
      .then(bots => this.setState({ bots: bots }));
  }

  toggleBotClick = (bot = this.state.currentBot) => {
    this.state.enlistedBots.includes(bot)
      ? this.removeBot(bot)
      : this.addBot(bot);
    this.goBack();
  };

  removeBot(rBot) {
    this.setState({
      enlistedBots: this.state.enlistedBots.filter(bot => bot.id !== rBot.id)
    });
  }

  addBot(bot) {
    this.setState({
      enlistedBots: [...this.state.enlistedBots, bot]
    });
  }

  removeFromCollection = (removed) => {
    fetch(`http://localhost:6001/bots/${removed.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    this.setState({
      bots: this.state.bots.filter(bot => bot !== removed),
      botArmy: this.state.botArmy.filter(bot => bot !== removed)
    })
  }

  showBot = bot => {
    const isInArmy = this.state.enlistedBots.includes(bot) ? true : false;
    this.setState({ currentBot: bot, isInArmy });
  };

  goBack = () => {
    this.setState({ currentBot: null });
  };



  render() {
    const { currentBot } = this.state;
    if (currentBot) {
      return (
        <BotSpecs
          bot={currentBot}
          toggleBotClick={this.toggleBotClick}
          goBack={this.goBack}
          isInArmy={this.state.isInArmy}
        />
      );
    }

    return (
      <div>
        <YourBotArmy
          removeFromCollection={this.removeFromCollection}
          enlistedBots={this.state.enlistedBots}
          toggleBotClick={this.toggleBotClick}
        />
        <BotCollection
          bots={this.state.bots}
          toggleBotClick={this.showBot}
          removeFromCollection={this.removeFromCollection}
        />
      </div>
    );
  }
}

export default BotsPage;
import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  renderBotCards = () => {
    return this.props.bots.map(bot => (
      <BotCard
        key={bot.id}
        bot={bot}
        toggleBotClick={this.props.toggleBotClick}
        removeFromCollection={this.props.removeFromCollection}
      />
    ));
  };

  render() {
    return (
      <div className="ui four column grid">
        <div className="row">{this.renderBotCards()}</div>
      </div>
    );
  }
}

export default BotCollection;
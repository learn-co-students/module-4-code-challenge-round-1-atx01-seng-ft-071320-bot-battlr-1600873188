import React, {Component} from "react";

const botTypeClasses = {
  Assault: "icon military",
  Defender: "icon shield",
  Support: "icon plus circle",
  Medic: "icon ambulance",
  Witch: "icon magic",
  Captain: "icon star"
};

class ArmyBotCard extends Component {

  constructor() {
    super()
    this.state = {
        clicked: false
    }
  }

  handleClick = () => {
    this.setState(previousState => {
        return {
          clicked: !previousState.clicked
        }
      }, () => {
        this.props.handleCardClick(this.state.clicked)})
    }   


  render() {
    return (
    <div className="ui column">
      <div
        className="ui card"
        key={this.props.bot.id}
      >
        <div className="image">
          <img alt="oh no!" src={this.props.bot.avatar_url} onClick={this.handleClick}/>
        </div>
        <div className="content">
          <div className="header">
            {this.props.bot.name}
            <i className={botTypeClasses[this.props.bot.bot_class]} />
          </div>
          <div className="meta text-wrap">
            <small>{this.props.bot.catchphrase}</small>
          </div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat" />
            {this.props.bot.health}
          </span>

          <span>
            <i className="icon lightning" />
            {this.props.bot.damage}
          </span>
          <span>
            <i className="icon shield" />
            {this.props.bot.armor}
          </span>
          <span>
            <div className="ui center aligned segment basic">
              <button
                className="ui mini red button"
                onClick={() => this.props.handleDelete(this.props.bot.id)}
              >
                x
              </button>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
  }
};

export default ArmyBotCard;




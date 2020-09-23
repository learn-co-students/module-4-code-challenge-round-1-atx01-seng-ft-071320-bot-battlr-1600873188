import React from "react";

const botTypeClasses = {
  Assault: "icon military",
  Defender: "icon shield",
  Support: "icon plus circle",
  Medic: "icon ambulance",
  Witch: "icon magic",
  Captain: "icon star"
};

const BotCard = props => {
  const {id, name, health, damage, armor, bot_class, catchphrase, avatar_url, enlisted} = props.robot
  return (
    <div className="ui column">
     
      <div
        className="ui card"
        key={id}
        onClick={() => props.addToMyArmy(props.robot)}>
        <div className="image">
          <img alt="oh no!" src={avatar_url} />
        </div>
        <div className="content">
          <div className="header">
            {name}
            <i className={botTypeClasses[bot_class]} />
          </div>
          <div className="meta text-wrap">
            <small>{catchphrase}</small>
          </div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat" />
            {health}
          </span>

          <span>
            <i className="icon lightning" />
            {damage}
          </span>
          <span>
            <i className="icon shield" />
            {armor}
          </span>
          <span>
            <div className="ui center aligned segment basic">
              <button
                className="ui mini red button"
                onClick={() =>
                  console.log("add code to connect event listener")
                }
              >
                x
              </button>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default BotCard;

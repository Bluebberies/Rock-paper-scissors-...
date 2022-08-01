import React from "react";

const SelectChoice = ({ handleClick }) => {
  return (
    <div className="select">
      <img src={require("../images/bg-pentagon.svg").default} alt="" />
      <div className="iconImg scissors" onClick={() => handleClick("scissors")}>
        <img src={require("../images/icon-scissors.svg").default} alt="" />
      </div>
      <div className="iconImg paper" onClick={() => handleClick("paper")}>
        <img src={require("../images/icon-paper.svg").default} alt="" />
      </div>
      <div className="iconImg rock" onClick={() => handleClick("rock")}>
        <img src={require("../images/icon-rock.svg").default} alt="" />
      </div>
      <div className="iconImg lizard" onClick={() => handleClick("lizard")}>
        <img src={require("../images/icon-lizard.svg").default} alt="" />
      </div>
      <div className="iconImg spock" onClick={() => handleClick("spock")}>
        <img src={require("../images/icon-spock.svg").default} alt="" />
      </div>
    </div>
  );
};

export default SelectChoice;

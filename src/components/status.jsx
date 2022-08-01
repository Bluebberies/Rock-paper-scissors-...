import React from "react";
import { useMediaQuery } from "react-responsive";

const Status = ({ selectedIcon, mouseChoice, handleClick, win }) => {
  const isTablet = useMediaQuery({ query: "(max-width: 768px)" });

  function checkScreenSize() {
    if (isTablet) {
      return "tabletScreen";
    }
  }

  function selectedImage() {
    if (selectedIcon === "scissors") {
      return require("../images/icon-scissors.svg").default;
    } else if (selectedIcon === "paper") {
      return require("../images/icon-paper.svg").default;
    } else if (selectedIcon === "rock") {
      return require("../images/icon-rock.svg").default;
    } else if (selectedIcon === "lizard") {
      return require("../images/icon-lizard.svg").default;
    } else if (selectedIcon === "spock") {
      return require("../images/icon-spock.svg").default;
    }
  }

  function mouseImage() {
    if (mouseChoice === "scissors") {
      return require("../images/icon-scissors.svg").default;
    } else if (mouseChoice === "paper") {
      return require("../images/icon-paper.svg").default;
    } else if (mouseChoice === "rock") {
      return require("../images/icon-rock.svg").default;
    } else if (mouseChoice === "lizard") {
      return require("../images/icon-lizard.svg").default;
    } else if (mouseChoice === "spock") {
      return require("../images/icon-spock.svg").default;
    }
  }

  function checkSelectedClass() {
    if (selectedIcon === "scissors") {
      return "scissors";
    } else if (selectedIcon === "paper") {
      return "paper";
    } else if (selectedIcon === "rock") {
      return "rock";
    } else if (selectedIcon === "lizard") {
      return "lizard";
    } else if (selectedIcon === "spock") {
      return "spock";
    }
  }

  function checkMouseChoice() {
    if (mouseChoice === "scissors") {
      return "scissors";
    } else if (mouseChoice === "paper") {
      return "paper";
    } else if (mouseChoice === "rock") {
      return "rock";
    } else if (mouseChoice === "lizard") {
      return "lizard";
    } else if (mouseChoice === "spock") {
      return "spock";
    }
  }

  function checkWin() {
    if (win === "win") {
      return "YOU WIN";
    } else if (win === "lose") {
      return "YOU LOSE";
    } else if (win === "draw") {
      return "DRAW";
    } else {
      return "";
    }
  }

  return (
    <div className={`status ${checkScreenSize()}`}>
      <div className="playerTag">
        <h3>YOU PICKED</h3>
        <div className={`personChoice ${checkSelectedClass()}`}>
          <img src={selectedImage()} alt="" />
        </div>
      </div>
      <div
        className={
          mouseChoice
            ? `result ${checkScreenSize()} show`
            : `result ${checkScreenSize()}`
        }
        onClick={handleClick}
      >
        <h3>{checkWin()}</h3>
        <div>
          <p>PLAY AGAIN</p>
        </div>
      </div>
      <div className="mouseTag">
        <h3>THE HOUSE PICKED</h3>
        <div className={`mouseChoice ${checkMouseChoice()}`}>
          <img src={mouseImage()} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Status;

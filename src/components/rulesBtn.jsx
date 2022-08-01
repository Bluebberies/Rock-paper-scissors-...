import React from "react";
import { useMediaQuery } from "react-responsive";

const RulesButton = ({ handleClick, handleReset }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 375px)" });

  function checkScreenSize() {
    if (!isMobile) {
      return "bigScreen";
    } else {
      return "smallScreen";
    }
  }

  return (
    <React.Fragment>
      <div onClick={handleReset} className={`resetBtn ${checkScreenSize()}`}>
        <p>RESET</p>
      </div>
      <div onClick={handleClick} className={`rulesBtn ${checkScreenSize()}`}>
        <p>RULES</p>
      </div>
    </React.Fragment>
  );
};

export default RulesButton;

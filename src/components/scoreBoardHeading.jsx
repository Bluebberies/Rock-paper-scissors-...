import React from "react";
import { useMediaQuery } from "react-responsive";

const ScoreBoardHeading = ({ value }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 425px)" });
  const isSmallerMobile = useMediaQuery({ query: "(max-width: 320px)" });

  function checkScreenSize() {
    if (isSmallerMobile) {
      return "smallerScreen";
    } else if (isMobile) {
      return "smallScreen";
    } else {
      return "";
    }
  }

  function checkStyle() {
    if (value > 0) {
      return { color: "green" };
    } else if (value === 0) {
      return { color: "hsl(229, 25%, 31%)" };
    } else {
      return { color: "red" };
    }
  }

  return (
    <div className={`scoreBoard ${checkScreenSize()}`}>
      <img src={require("../images/logo-bonus.svg").default} alt="" />
      <div className="scoreBox">
        <div className="title">SCORE</div>
        <div className="score" style={checkStyle()}>
          {value}
        </div>
      </div>
    </div>
  );
};

export default ScoreBoardHeading;

import React from "react";
import { useMediaQuery } from "react-responsive";

const Rules = ({ handleClick }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 375px)" });

  function checkScreenSize() {
    if (!isMobile) {
      return "bigScreen";
    } else {
      return "smallScreen";
    }
  }

  return (
    <div className="modal">
      <div className={`rulesCard ${checkScreenSize()}`}>
        <h1 className={checkScreenSize()}>RULES</h1>
        <img
          onClick={handleClick}
          className={checkScreenSize()}
          src={require("../images/icon-close.svg").default}
          alt=""
        />
        <img
          className="rulesImage"
          src={require("../images/image-rules-bonus.svg").default}
          alt=""
        />
      </div>
    </div>
  );
};

export default Rules;

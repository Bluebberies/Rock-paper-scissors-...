import React from "react";

const Footer = () => {
  return (
    <div
      className="attribution"
      style={{
        fontSize: "21px",
        textAlign: "center",
        position: "absolute",
        bottom: 0,
        width: "100%",
      }}
    >
      Challenge by{" "}
      <a
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "hsl(228, 45%, 44%)" }}
      >
        Frontend Mentor
      </a>
      . Coded by{" "}
      <a
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "hsl(228, 45%, 44%)" }}
        href="https://twitter.com/fran__cies"
      >
        Francis
      </a>
      .
    </div>
  );
};

export default Footer;

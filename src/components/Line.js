import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Line = ({ title, symbol }) => {
  const [isHover, setIsHover] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="container">
      <CopyToClipboard text={symbol}>
        <button
          className="line shrink hover"
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => {
            setIsHover(false);
            setIsClicked(false);
          }}
          onClick={() => {
            setIsClicked(true);
          }}
        >
          <div>
            <span>{symbol}</span>
            {title}
          </div>
          <div className="copy">
            <span
              style={{
                display: isHover ? "flex" : "none",
                color: isClicked && "black",
              }}
              className="hidden-text"
            >
              Click to copy !
            </span>
            <FontAwesomeIcon
              icon="check"
              style={{
                display: isHover ? "flex" : "none",
                color: isClicked ? "black" : "#f8efef",
              }}
            />
          </div>
        </button>
      </CopyToClipboard>
    </div>
  );
};

export default Line;

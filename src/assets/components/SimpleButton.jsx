import React from "react";
import imgUrl from "../images/button/circleArrow.png";
import "../scss/simpleButton.scss";

const SimpleButton = (props) => {
  return (
    <a href={props.link} className="noto-san achrtag">
      <p>{props.label}</p>
      <span>
        <img src={imgUrl} alt="" />
      </span>
    </a>
  );
};

export default SimpleButton;

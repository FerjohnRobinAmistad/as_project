import React, { useState, useRef } from "react";
import "../scss/button.scss";

const Button = (props) => {
  const spanRef = useRef(null);

  const handleMouseEnter = (e) => {
    const button = e.target;
    const parentOffset = button.getBoundingClientRect();
    const relX = e.pageX - parentOffset.left;
    const relY = e.pageY - parentOffset.top;

    spanRef.current.style.top = relY + "px";
    spanRef.current.style.left = relX + "px";
  };

  const handleMouseOut = () => {
    spanRef.current.style.top = "";
    spanRef.current.style.left = "";
  };

  return (
    <a
      href={props.link}
      className={`noto-san btn ${props.style}`}
      onMouseEnter={handleMouseEnter}
      onMouseOut={handleMouseOut}
    >
      <p className="label">{props.label}</p>
      <span ref={spanRef}></span>
      <img class="arrow" src={props.icon} />
    </a>
  );
};

export default Button;

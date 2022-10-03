import "./style/Button.css";
import React from "react";

function Button(props) {
  return (
    <a href={props.link} className="btn btn-saya btn-danger">
      {props.text}
    </a>
  );
}
export default Button;

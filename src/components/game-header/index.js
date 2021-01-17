import React from "react";
import "./index.css";

export const GameHeader = ({attempts, playername}) => {
  return (
    <div className="GameHeader">
      <h1>PLAYERNAME: <p>{playername}</p></h1>
      <h1>ATTEMPTS: <p>{attempts}</p></h1>
    </div>
  )
}
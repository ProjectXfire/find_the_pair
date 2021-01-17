import React from "react";
import "./index.css";
import initialImg from "../../assets/img/sun.jpg";

export const GameContent = ({characters, handleFlip, click}) => {
  return (
    <div className="GameContent">
      <ul className="GameContent__cards">
      {
        characters.map((char, i) => {
          return (
            <li key={i} onClick={() => {
              if (click && !char.flipped) {
                handleFlip(i, char.id, char.img);
              }
            }}>
              {
                char.flipped
                ? <img className="on" src={char.img} alt="" />
                : <img className="off" src={initialImg} alt="" />
              }
            </li>
          )
        })
      }
      </ul>
    </div>
  )
}
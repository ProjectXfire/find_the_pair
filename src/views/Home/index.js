import React, { useState } from "react";
import { Button, Input } from "semantic-ui-react";
import "./index.css";
import rick_and_morty from "../../assets/img/rick_and_morty.svg";

export const Home = (props) => {

  const [values, setValues] = useState({
    playername: '',
    error: ''
  });

  function handleChange(e) {
    setValues({
      playername: e.target.value
    })
  }

  function validatePlayerName() {
    if (!values.playername) {
      setValues({
        error: "Playername is required"
      })
    } else {
      setValues({
        error: ''
      })
      props.history.push({
        pathname: '/game',
        state: {
          name: values.playername
        }
      });
    }
  }

  return (
    <div className="Home">
      <img className="Home__img" src={rick_and_morty} alt="rick_and_morty" />
      <h1>Find the Pair</h1>
      <div className="Home__container">
        <div className="Home__actions">
          <Input
            placeholder="Player name"
            name="playername"
            values={values.playername}
            onChange={handleChange}
          />
          {
            (values.error) &&
            <span className="Home__alert">{values.error}</span>
          }
          <Button positive onClick={validatePlayerName}>Play</Button>
        </div>
      </div>
    </div>
  )
}
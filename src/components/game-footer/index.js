import React from "react";
import './index.css';
import { Button } from 'semantic-ui-react';
import { useHistory } from "react-router-dom";

export const GameFooter = ({ restartGame }) => {

  const history = useHistory();

  return (
    <div className="GameFooter">
      <Button color='violet' onClick={() => restartGame()}>Restart</Button>
      <Button color='green' onClick={() => history.push('/home')}>Return</Button>
  </div>
  )
}
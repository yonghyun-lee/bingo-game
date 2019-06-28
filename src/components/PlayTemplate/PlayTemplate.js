import React from 'react';
import './PlayTemplate.scss';
import BingoHeader from "../PlayHeader/BingoHeader";
import OnePlayerGame from "../OnePlayerGame/OnePlayerGame";

const PlayTemplate = (props) => {
  return (
    <div className="PlayTemplate">
      <BingoHeader player={props.playerNum}/>
      {props.playerNum==='1'?
        <OnePlayerGame
          table={props.table}
          start={props.start}
          onClick={props.onClick}/>:
        <div>asdf</div>}
    </div>
  );
};

export default PlayTemplate;
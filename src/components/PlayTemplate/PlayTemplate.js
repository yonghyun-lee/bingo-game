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
          tableState={props.tableState}
          start={props.start}
          startClick={props.startClick}
          numClick={props.numClick}
          bingoCount={props.bingoCount[0]}
          bingoList={props.bingoList}
        />:
        <div>asdf</div>}
    </div>
  );
};

export default PlayTemplate;
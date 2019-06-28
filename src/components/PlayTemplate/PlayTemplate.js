import React from 'react';
import './PlayTemplate.scss';
import BingoHeader from "../PlayHeader/BingoHeader";
import OnePlayerGame from "../OnePlayerGame/OnePlayerGame";
import TwoPlayerGame from "../TwoPlayerGame/TwoPlayerGame";

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
        <TwoPlayerGame
          table={props.table}
          tableState={props.tableState}
          start={props.start}
          startClick={props.startClick}
          numClick={props.numClick}
          bingoCount={props.bingoCount[0]}
          bingoList={props.bingoList}
          turn={props.turn}
        />}
    </div>
  );
};

export default PlayTemplate;
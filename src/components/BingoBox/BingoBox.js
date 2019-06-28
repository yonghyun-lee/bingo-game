import React from 'react';
import './BingoBox.scss'
import BingoRow from "../BingoRow/BingoRow";

const BingoBox = (props) => {

  return (
    <div className={!props.start||props.turn===props.player? "BingoBox": "not-turn"}>
      <h1>player {props.player+1}</h1>
      {props.table.map((row, index) => {
        return <BingoRow
          row={row}
          rowIndex={index}
          key={index}
          numClick={props.numClick}
          tableState={props.tableState}/>
      })}
    </div>
  );
};

export default BingoBox;

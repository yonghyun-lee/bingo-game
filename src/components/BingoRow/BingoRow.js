import React from 'react';
import './BingoRow.scss'
import BingoNumber from "../BingoNumber/BingoNumber";

const BingoRow = (props) => (
  <div className="BingoRow">
    {props.row.map((num, index) => {
      return <BingoNumber
        num={num}
        rowIndex={props.rowIndex}
        numIndex={index}
        key={index}
        numClick={props.numClick}
        tableState={props.tableState}/>;
    })}
  </div>
);

export default BingoRow;

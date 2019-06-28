import React from 'react';
import './BingoBox.scss'
import BingoRow from "../BingoRow/BingoRow";

const BingoBox = (props) => {

  return (
    <div className="BingoBox">
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

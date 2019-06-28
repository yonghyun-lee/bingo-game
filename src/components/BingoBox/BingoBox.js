import React from 'react';
import './BingoBox.scss'
import BingoRow from "../BingoRow/BingoRow";

const BingoBox = (props) => {

  return (
    <div className="BingoBox">
      {props.table.map((row, index) => {
        return <BingoRow row={row} rowIndex={index} key={index}/>
      })}
    </div>
  );
};

export default BingoBox;

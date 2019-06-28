import React from 'react';
import './BingoRow.scss'
import BingoNumber from "../BingoNumber/BingoNumber";

const BingoRow = (props) => (
  <div className="BingoRow">
    {props.row.map((num, index) => {
      console.log(num, index);
      return <BingoNumber num={num} numIndex={index} key={index}/>;
    })}
  </div>
);

export default BingoRow;

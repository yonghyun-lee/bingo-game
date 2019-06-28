import React from 'react';
import './BingoNumber.scss'

const BingoNumber = (props) => {
  const {num, numClick, tableState, rowIndex, numIndex} = props;

  const clicked = tableState[rowIndex][numIndex]? "clicked": "";

  return (
    <button className={"BingoNum " + clicked}
            onClick={numClick} value={num}>
      {num}
    </button>
  );
};

export default BingoNumber;

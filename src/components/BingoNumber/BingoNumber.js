import React from 'react';
import './BingoNumber.scss'

const BingoNumber = (props) => (
  <button className="BingoNum">
    {props.num}
  </button>
);

export default BingoNumber;

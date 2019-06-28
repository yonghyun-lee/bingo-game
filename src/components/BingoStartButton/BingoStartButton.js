import React from 'react';
import './BingoStartButton.scss'

const BingoStartButton = (props) => {

  const {start, startClick} = props;

  return (
    <button className="Bingo-start-btn" onClick={startClick}>
      {start? "재시작": "시작"}
    </button>
  )
};

export default BingoStartButton;

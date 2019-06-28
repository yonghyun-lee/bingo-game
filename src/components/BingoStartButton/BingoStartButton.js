import React from 'react';
import './BingoStartButton.scss'

const BingoStartButton = (props) => {

  const {start, onClick} = props;

  return (
    <button className="Bingo-start-btn" onClick={onClick}>
      {start? "재시작": "시작"}
    </button>
  )
};

export default BingoStartButton;

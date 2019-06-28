import React from 'react';
import './BingoStartButton.scss'

const BingoStartButton = (props) => {

  const {start, firstStart} = props;

  console.log(start);

  const text = () => {
    if (!start && !firstStart) return "시작";
    else if (!start) return "재시작";
    else return "중지";
  };
  return (
    <button className="Bingo-start-btn">
      {text()}
    </button>
  )
};

export default BingoStartButton;

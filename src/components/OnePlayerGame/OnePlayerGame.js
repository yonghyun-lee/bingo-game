import React from 'react';
import './OnePlayerGame.scss';
import BingoBox from "../BingoBox/BingoBox";
import BingoStartButton from "../BingoStartButton/BingoStartButton";

const OnePlayerGame = (props) => {

  const {table, start, onClick} = props;

  return (
    <div className="OnePlayerGame">
      <div className="board">
        <BingoBox table={table[0]}/>
      </div>

      <BingoStartButton start={start} onClick={onClick}/>
    </div>
  );
};

export default OnePlayerGame;
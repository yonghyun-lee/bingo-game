import React from 'react';
import './OnePlayerGame.scss';
import BingoBox from "../BingoBox/BingoBox";

const OnePlayerGame = (props) => {

  const {table, start} = props;

  // console.log(table, start);

  return (
    <div className="OnePlayerGame">
      <div className="board">
        <BingoBox table={table[0]}/>
      </div>

      <button>시작</button>
    </div>
  );
};

export default OnePlayerGame;
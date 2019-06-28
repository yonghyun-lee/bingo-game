import React from 'react';
import './OnePlayerGame.scss';
import BingoBox from "../BingoBox/BingoBox";
import BingoStartButton from "../BingoStartButton/BingoStartButton";
import BingoList from "../BingoList/BingoList";

const OnePlayerGame = (props) => {

  const {table, tableState, start, startClick, numClick, bingoCount, bingoList} = props;

  return (
    <div className="OnePlayerGame">
      <div className="board">
        <BingoBox table={table[0]} numClick={numClick} tableState={tableState[0]}/>
        <BingoList bingoCount={bingoCount} bingoList={bingoList}/>
      </div>

      <BingoStartButton start={start} startClick={startClick}/>
    </div>
  );
};

export default OnePlayerGame;
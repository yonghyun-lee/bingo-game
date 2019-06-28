import React from 'react';
import './TwoPlayerGame.scss';
import BingoBox from "../BingoBox/BingoBox";
import BingoStartButton from "../BingoStartButton/BingoStartButton";
import BingoList from "../BingoList/BingoList";

const TwoPlayerGame = (props) => {

  const {table, tableState, start, startClick, numClick, bingoCount, bingoList, turn} = props;

  return (
    <div className="TwoPlayerGame">
      <div className="board">
        <BingoBox
          start={start}
          player={0}
          table={table[0]}
          numClick={numClick}
          tableState={tableState[0]}
          turn={turn}/>
        <BingoList bingoCount={bingoCount} bingoList={bingoList}/>
        <BingoBox
          start={start}
          player={1}
          table={table[1]}
          numClick={numClick}
          tableState={tableState[1]}
          turn={turn}/>
      </div>

      <BingoStartButton start={start} startClick={startClick}/>
    </div>
  );
};

export default TwoPlayerGame;
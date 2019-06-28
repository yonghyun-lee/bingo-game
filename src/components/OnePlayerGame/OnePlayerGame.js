import React from 'react';
import './OnePlayerGame.scss';
import BingoBox from "../BingoBox/BingoBox";

const OnePlayerGame = (props) => {
  return (
    <div className="OnePlayerGame">
      <BingoBox/>
    </div>
  );
};

export default OnePlayerGame;
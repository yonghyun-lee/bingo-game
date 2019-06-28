import React from 'react';
import './BingoHeader.scss'

const BingoHeader = (props) => (
  <div className="BingoHeader">
    <div className="BingoHeader-title">{props.player} Player Game!</div>
  </div>
);

export default BingoHeader;

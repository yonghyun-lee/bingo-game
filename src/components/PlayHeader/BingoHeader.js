import React from 'react';
import './BingoHeader.scss'
import {Link} from "react-router-dom";

const BingoHeader = (props) => (
  <div className="BingoHeader">
    <Link to="/">뒤로</Link>
    <div className="BingoHeader-title">{props.player} Player Game!</div>
  </div>
);

export default BingoHeader;

import React from 'react';
import './BingoList.scss'

const BingoList = (props) => {
  return (
    <div className="BingoList">
     <ul>
        {props.bingoList.map((val, index)=> {
          return <li key={index}>player {val.player+1}: {val.type} 성공</li>
        })}
      </ul>
    </div>
  );
};

export default BingoList;

import {bingo} from "./config";

export const initTable = (playerNum) => {

  let table = {};

  for (let boxNum=0; boxNum < playerNum; boxNum++) {
    table[boxNum] = new Array(bingo.rowCount);
    for (let row=0; row<bingo.rowCount; row++) {
      table[boxNum][row] = new Array(bingo.numberCount).fill(0);
    }
  }

  return table;
};
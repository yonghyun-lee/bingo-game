import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import {bingo} from "../../lib/config";

const GAME_INIT = 'GAME_INIT';
const START = 'START';

const gameInit = createAction(GAME_INIT, (payload) => payload);
const start = createAction(START);

const initialState = {
  start: false,
  playerNum: 0,
  table: {
    0: [],
    1: []
  }
};

export const actionCreators = {
  gameInit,
  start
};

export default handleActions({
  [GAME_INIT]: (state, action) => {
    return produce(state, (draft) => {
      if (!action) return;

      draft.playerNum = action.payload;
      let table = {};

      for (let boxNum=0; boxNum < action.payload; boxNum++) {
        table[boxNum] = new Array(bingo.rowCount);
        for (let row=0; row<bingo.rowCount; row++) {
          table[boxNum][row] = new Array(bingo.numberCount).fill(0);
        }
      }
      draft.table = table;
    });
  },
  [START]: (state, action) => {
    return produce(state, (draft) => {
      if (!action) return;

      draft.start = true;
      for (let boxNum=0; boxNum < Object.keys(state.table).length; boxNum++) {
        for (let row=0; row<bingo.rowCount; row++) {
          for (let num=0; num<bingo.numberCount; num++) {
            draft.table[boxNum][row][num] = Math.floor(
              Math.random() * (bingo.numMax - bingo.numMin + 1)) + bingo.numMin;
          }
        }
      }
    });
  }
}, initialState);
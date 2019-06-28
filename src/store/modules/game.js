import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import {bingo} from "../../lib/config";

const GAME_INIT = 'GAME_INIT';

const gameInit = createAction(GAME_INIT, (payload) => payload);

const initialState = {
  start: null,
  playerNum: 0,
  table: {
    0: [],
    1: []
  }
};

export const actionCreators = {
  gameInit
};

export default handleActions({
  [GAME_INIT]: (state, action) => {
    return produce(state, (draft) => {
      if (!action) return;

      draft.playerNum = action.payload;

      let table = {};
      for (let boxNum=0; boxNum < draft.playerNum; boxNum++) {
        table[boxNum] = new Array(bingo.rowCount);
        for (let row=0; row<bingo.rowCount; row++) {
          table[boxNum][row] = new Array(bingo.numberCount).fill(0);
        }
      }
      draft.table = table;
    });
  },
}, initialState);
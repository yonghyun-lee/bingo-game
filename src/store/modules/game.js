import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import {initTable} from "../../lib/initTable";

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
      draft.table = initTable(draft.playerNum);
    });
  },
  [START]: (state, action) => {
    return produce(state, (draft) => {
      if (!action) return;

      draft.start = true;
      draft.table = initTable(draft.playerNum);
    });
  }
}, initialState);
import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

const CHANGE_PLAYER_NUMBER = 'PLAYER_NUMBER';

const changePlayerNumber = createAction(CHANGE_PLAYER_NUMBER, (payload) => payload);

const initialState = {
  start: null,
  playerNum: 0,
  table: {}
};

export const actionCreators = {
  changePlayerNumber
};

export default handleActions({
  [CHANGE_PLAYER_NUMBER]: (state, action) => {
    return produce(state, (draft) => {
      if (!action) return;

      draft.playerNum = action.payload;
      if (action.payload === 1) {
        draft.table = {
          0: [],
          1: []
        };
      }
    });
  },
}, initialState);
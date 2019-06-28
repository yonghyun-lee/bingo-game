import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import {bingo} from "../../lib/config";

const GAME_INIT = 'GAME_INIT';
const START = 'START';
const NUM_CLICK = 'NUM_CLICK';
const BINGO_SUCCESS = 'BINGO_SUCCESS';

const gameInit = createAction(GAME_INIT, (payload) => payload);
const start = createAction(START);
const numClick = createAction(NUM_CLICK, (payload) => payload);
const bingoSuccess = createAction(BINGO_SUCCESS, (payload) => payload);

const initialState = {
  start: false,
  playerNum: 0,
  table: {
    0: [],
    1: []
  },
  tableState: {
    0: [],
    1: []
  },
  bingoList: [],
  bingoCount: [0, 0],
  clickedNum: [],
  turn: 0
};

export const actionCreators = {
  gameInit,
  start,
  numClick,
  bingoSuccess
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
      let tableState = {};
      for (let boxNum=0; boxNum < action.payload; boxNum++) {
        tableState[boxNum] = new Array(bingo.rowCount);
        for (let row=0; row<bingo.rowCount; row++) {
          tableState[boxNum][row] = new Array(bingo.numberCount).fill(false);
        }
      }
      draft.tableState = tableState;
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
      for (let boxNum=0; boxNum < Object.keys(state.table).length; boxNum++) {
        for (let row=0; row<bingo.rowCount; row++) {
          for (let num=0; num<bingo.numberCount; num++) {
            draft.tableState[boxNum][row][num] = false;
          }
        }
      }
      draft.bingoList = [];
      draft.bingoCount = [0, 0];
      draft.turn = 0;
    });
  },
  [NUM_CLICK]: (state, action) => {
    return produce(state, (draft) => {
      if (!action) return;

      for (let boxNum=0; boxNum < Object.keys(state.table).length; boxNum++) {
        for (let row=0; row<bingo.rowCount; row++) {
          for (let num=0; num<bingo.numberCount; num++) {
            if (state.table[boxNum][row][num] === action.payload) {
              draft.tableState[boxNum][row][num] = true;
            }
          }
        }
      }

      let bingoCount = [0, 0];
      let bingoList = [];

      // 가로
      for (let box=0; box<state.playerNum; box++) {
        for (let row=0; row<bingo.rowCount; row++) {
          let trueCount = 0;
          for (let num=0; num<bingo.numberCount; num++) {
            if (draft.tableState[box][row][num]) {
              trueCount++;
            }
          }
          if (trueCount === bingo.rowCount) {
            bingoCount[box]++;
            bingoList.push({player: box, type: "가로"});
          }
        }
      }

      // 세로
      for (let box=0; box<state.playerNum; box++) {
        for (let num=0; num<bingo.numberCount; num++) {
          let trueCount = 0;
          for (let row=0; row<bingo.rowCount; row++) {
            if (draft.tableState[box][row][num]) {
              trueCount++;
            }
            if (trueCount === bingo.rowCount) {
              bingoCount[box]++;
              bingoList.push({player: box, type: "세로"});
            }
          }
        }
      }

      // 대각선
      for (let box=0; box<state.playerNum; box++) {
        let trueCount = 0;
        for (let i=0; i<bingo.rowCount; i++) {
          if (draft.tableState[box][i][i]) {
            trueCount++;
          }
          if (trueCount === bingo.rowCount) {
            bingoCount[box]++;
          }
        }
        trueCount=0;
        for (let i=0; i<bingo.rowCount; i++) {
          if (draft.tableState[box][bingo.rowCount-1-i][i]) {
            trueCount++;
          }
          if (trueCount === bingo.rowCount) {
            bingoCount[box]++;
            bingoList.push({player: box, type: "대각선"});
          }
        }
      }

      draft.bingoCount = bingoCount;
      draft.bingoList = bingoList;
      if (state.turn === 1) draft.turn=0;
      else draft.turn=1;
      draft.clickedNum.push(action.payload);
    });
  }
}, initialState);
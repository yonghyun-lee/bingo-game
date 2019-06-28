import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import PlayTemplate from "../components/PlayTemplate/PlayTemplate";
import {GameActions} from "../store/actionCreators";
import {connect} from "react-redux";

class PlayContainer extends Component {

  initialize = () => {
    const {playerNum} = this.props;

    GameActions.gameInit(playerNum);
  };

  componentWillMount() {
    this.initialize();
  }

  componentWillUpdate(nextProps, nextState, nextContext) {
    if (nextProps.bingoCount[0] >= 5) {
      alert("player 1가 빙고를 완성했습니다.");
      GameActions.start();
    } else if (nextProps.bingoCount[1] >= 5) {
      alert("player 2가 빙고를 완성했습니다.");
      GameActions.start();
    }
  }

  startClick = () => {
    GameActions.start();
  };

  numClick = (e) => {
    const {start} = this.props;

    if (!start) return;

    GameActions.numClick(Number(e.target.value));
  };

  render() {
    return (
      <PlayTemplate
        playerNum={this.props.playerNum}
        table={this.props.table}
        tableState={this.props.tableState}
        start={this.props.start}
        startClick={this.startClick}
        numClick={this.numClick}
        bingoCount={this.props.bingoCount}
        bingoList={this.props.bingoList}
      />
    );
  }
}

export default withRouter(
  connect((state) => ({
      table: state.game.table,
      tableState: state.game.tableState,
      start: state.game.start,
      bingoList: state.game.bingoList,
      bingoCount: state.game.bingoCount,
    })
  )(PlayContainer));
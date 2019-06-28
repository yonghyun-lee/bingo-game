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
        numClick={this.numClick}/>
    );
  }
}

export default withRouter(
  connect((state) => ({
      table: state.game.table,
      tableState: state.game.tableState,
      start: state.game.start
    })
  )(PlayContainer));
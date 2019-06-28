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

  onClick = () => {
    GameActions.start();
  };

  render() {
    return (
      <PlayTemplate
        playerNum={this.props.playerNum}
        table={this.props.table}
        start={this.props.start}
        onClick={this.onClick}/>
    );
  }
}

export default withRouter(
  connect((state) => ({
      table: state.game.table,
      start: state.game.start
    })
  )(PlayContainer));
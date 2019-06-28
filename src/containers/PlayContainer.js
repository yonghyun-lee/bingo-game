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

  render() {
    return (
      <PlayTemplate
        playerNum={this.props.playerNum}
        table={this.props.table}
        start={this.props.start}
        firstStart={this.props.firstStart}/>
    );
  }
}

export default withRouter(
  connect((state) => ({
      table: state.game.table,
      start: state.game.start,
      firstStart: state.game.firstStart
    })
  )(PlayContainer));
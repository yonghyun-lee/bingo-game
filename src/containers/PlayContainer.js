import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import PlayTemplate from "../components/PlayTemplate/PlayTemplate";
import {GameActions} from "../store/actionCreators";
import {connect} from "react-redux";

class PlayContainer extends Component {

  initialize = () => {
    // todo redux state update
    GameActions.changePlayerNumber(this.props.playerNum);
  };

  componentWillMount() {
    this.initialize();
  }

  render() {
    return (
      <PlayTemplate
        playerNum={this.props.playerNum}
        table={}/>
    );
  }
}

export default withRouter(
  connect((state) => ({
      user: state.login.user,
      open: state.profile.open
    })
  )(PlayContainer));
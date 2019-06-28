import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import PlayTemplate from "../components/PlayTemplate/PlayTemplate";

class PlayContainer extends Component {

  initialize = () => {
    // todo redux state update
  };

  componentWillMount() {
    this.initialize();
  }

  render() {
    return (
      <PlayTemplate playerNum={this.props.playerNum}/>
    );
  }
}

export default withRouter(PlayContainer);
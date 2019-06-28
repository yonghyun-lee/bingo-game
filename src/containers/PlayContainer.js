import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import PlayTemplate from "../components/PlayTemplate/PlayTemplate";

class PlayContainer extends Component {

  render() {
    return (
      <PlayTemplate playerNum={this.props.playerNum}/>
    );
  }
}

export default withRouter(PlayContainer);
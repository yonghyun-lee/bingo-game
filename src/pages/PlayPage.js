import React, { Component } from 'react';
import PlayContainer from "../containers/PlayContainer";

class PlayPage extends Component{

  render() {
    const {playerNum} = this.props.match.params;

    return (
      <PlayContainer playerNum={playerNum}/>
    );
  }
}

export default PlayPage;
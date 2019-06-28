import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Helmet } from "react-helmet";
import LandingTemplate from "./LandingTemplate/LandingTemplate";
import PlayPage from "../pages/PlayPage";

const App = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Bingo</title>
        <meta
          name="description"
          content="빙고 게임"
        />
      </Helmet>
      <Switch>
        <Route exact path="/" component={LandingTemplate} />
        <Route exact path="/play/:playerNum" component={PlayPage} />
      </Switch>
    </React.Fragment>
  );
};

export default App;
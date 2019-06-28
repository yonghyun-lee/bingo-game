import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Helmet } from "react-helmet";

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
      </Switch>
    </React.Fragment>
  );
};

export default App;
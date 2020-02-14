import React from "react";
import { createBrowserHistory } from 'history'
import { Route, Router, Switch } from "react-router";

//Components
import SimilarImages from "./components/similarImages/SimilarImages";
import PixabayImages from "./components/pixabay/pixabay";


import { syncHistoryWithStore } from "mobx-react-router";
import { store } from "./stores";

const broswerHistory = createBrowserHistory();
const history = syncHistoryWithStore(broswerHistory, store.routerStore);

export const AppRoutes = () => {
  return (
    <Router history={history} > 
      <Switch>
        <Route
          key="similar-routes"
          exact
          path="/"
          component={SimilarImages}
        />
        ,
        <Route key="pixabay-routes" exact path="/pix" component={PixabayImages} />,
      </Switch>
    </Router>
  );
};

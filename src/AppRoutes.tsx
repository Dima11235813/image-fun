import React from "react";
import { Route, Router, Switch } from "react-router";

//Components
import SimilarImages from "./components/similarImages/SimilarImages";
import PixabayImages from "./components/pixabay/Pixabay";

export const AppRoutes = () => {
  return (
    <Router history={null}> 
      <Switch>
        <Route
          key="similar-routes"
          exact
          path="/similar"
          component={SimilarImages}
        />
        ,
        <Route key="pixabay-routes" exact path="/" component={PixabayImages} />,
      </Switch>
    </Router>
  );
};

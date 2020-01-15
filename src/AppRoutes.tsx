import React from 'react'
import { Route } from "react-router";

//Components
import SimilarImages from './components/similarImages/SimilarImages';

export const AppRoutes = () => {
    return [
        <Route key="similar-routes" exact path="/similar" component={SimilarImages} />,
        <Route key="pixabay-routes" exact path="/" component={} />,
    ]
}
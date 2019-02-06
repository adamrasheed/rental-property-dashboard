import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./Components/Global/Header";
import Home from "./Components/Views/Home";
import PropertyInfoWrapper from "./Components/Views/PropertyInfoWrapper";
import NoMatch from "./Components/Views/NoMatch";
import { getPathName } from "./utils";

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/properties/:propertyId" component={PropertyInfoWrapper} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  );
};

export default Routes;

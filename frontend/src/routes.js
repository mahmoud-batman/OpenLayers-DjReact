import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import MapWrapper from "./containers/MapWrapper";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/" component={MapWrapper} />
    </Switch>
  );
}

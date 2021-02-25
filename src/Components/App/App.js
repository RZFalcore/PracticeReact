import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../../Containers/Home/Home";
import Registartion from "../../Containers/Registration/Registration";
import Login from "../../Containers/Login/Login";
import {navigation} from "../../constants.js";


function App() {
  return (
    <div>
      App
      <Switch>
        <Route exact path={navigation.home} component={Home}></Route>
        <Route path={navigation.registration} component={Registartion}></Route>
        <Route path={navigation.login} component={Login}></Route>
       </Switch>
    </div>
  );
}

export default App;
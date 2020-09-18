import React from "react";
import { Route, Switch } from "react-router";
import PrivateRoute from "../utils/PrivateRoute";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import { connect } from "react-redux";
import NotFound from "../pages/NotFound/NotFound";

const Routes = ({ auth }) => {
  return (
    <Switch>
      <Route exact path="/login" component={Login} />
      <PrivateRoute exact path="/" auth={auth} component={Home} />
      <Route path="*" exact={true} component={NotFound} />
    </Switch>
  );
};

const mapStateToProps = (state) => ({
  auth: state.user.auth,
});

export default connect(mapStateToProps, null)(Routes);

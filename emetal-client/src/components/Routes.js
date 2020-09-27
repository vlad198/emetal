import React from "react";
import { Route, Switch } from "react-router";
import PrivateRoute from "../utils/PrivateRoute";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import { connect } from "react-redux";
import NotFound from "../pages/NotFound/NotFound";
import Profile from "../pages/Profile/Profile";
import FrontPage from "../pages/FrontPage/FrontPage";
import Register from "../pages/Register/Register";

const Routes = ({ auth }) => {
  return (
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/" component={FrontPage} />
      <PrivateRoute auth={auth}>
        <Route exact path="/home" component={Home} />
        <Route exact path="/profile" component={Profile} />
      </PrivateRoute>
      <Route component={NotFound} />
    </Switch>
  );
};

const mapStateToProps = (state) => ({
  auth: state.user.auth,
});

export default connect(mapStateToProps, null)(Routes);

import React from "react";
import { Redirect, Route } from "react-router";

const PrivateRoute = ({ component: Component, auth, ...rest }) => {
  console.log("Private route..");

  return (
    <Route
      {...rest}
      render={(props) =>
        auth ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;

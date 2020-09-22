import { push } from "connected-react-router";
import React, { Component, useEffect } from "react";
import { connect } from "react-redux";

const Profile = ({ user, auth, unAuthorized }) => {
  useEffect(() => {
    if (!auth) unAuthorized();
  }, [auth, unAuthorized]);

  return (
    <div>
      <ul>
        <li>Name : {user.name}</li>
        <li>Email : {user.email}</li>
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user.user,
  auth: state.user.auth,
});

const mapDispatchToProps = (dispatch) => ({
  unAuthorized: () => dispatch(push("/login")),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

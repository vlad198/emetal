import { push } from "connected-react-router";
import React, { Component, Fragment, useEffect } from "react";
import { connect } from "react-redux";

const Profile = ({ user, auth, unAuthorized }) => {
  useEffect(() => {
    if (!auth) unAuthorized();
  }, [auth]);

  return (
    <div>
      <ul>
        <li>Email : {user.email}</li>
        <li>Rol : {user.role}</li>
        {user.companyInfo ? (
          <Fragment>
            <li>Numele Companiei : {user.companyInfo.companyName}</li>
            <li>CUI : {user.companyInfo.CUI}</li>
          </Fragment>
        ) : user.individualInfo ? (
          <Fragment>
            <li>Nume : {user.individualInfo.firstName}</li>
            <li>Prenume : {user.individualInfo.lastName}</li>
          </Fragment>
        ) : (
          <Fragment>
            <li>Nume : {user.adminInfo.firstName}</li>
            <li>Prenume : {user.adminInfo.lastName}</li>
          </Fragment>
        )}
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

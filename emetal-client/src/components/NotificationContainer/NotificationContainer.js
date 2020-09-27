import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import Notification from "../Notification/Notification";

const NotificationContainer = ({ notifications }) => {
  console.log(notifications);

  return (
    <Fragment>
      {notifications &&
        notifications.map((notification) => (
          <Notification
            key={notification.date}
            status={notification.status}
            title={notification.title}
            message={notification.message}
          />
        ))}
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  notifications: state.notification.notifications,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotificationContainer);

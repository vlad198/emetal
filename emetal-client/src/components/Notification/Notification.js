import React, { Component, useState } from "react";
import { connect } from "react-redux";
import Toast from "react-bootstrap/Toast";

const Notification = ({ message, title, status }) => {
  const [show, setShow] = useState(true);

  const bkColor = status === "success" ? "lightgreen" : "#ff726f";

  return (
    <Toast
      onClose={() => setShow(false)}
      show={show}
      autohide
      style={{
        position: "absolute",
        top: 0,
        right: 0,
        backgroundColor: bkColor,
      }}
    >
      <Toast.Header closeButton={true}>
        <strong className="mr-auto">{title}</strong>
      </Toast.Header>
      <Toast.Body>{message}</Toast.Body>
    </Toast>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Notification);

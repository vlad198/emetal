import React, { Component, useState } from "react";
import { connect } from "react-redux";
import "./index.css";
import Logo from "../../assets/img/logo.png";
import Icon from "../../assets/icons/1.png";
import { Link } from "react-router-dom";
// import IconWorker from "../../assets/icons/3.png";

const Navbar2 = ({ auth }) => {
  const [navigation, setNavigation] = useState(false);

  return (
    <div className="wrapper">
      <div className="navbar">
        <div className="navbar_top">
          <ul className="links">
            <li>
              <a href="#">Informatii</a>
            </li>
            <li>
              <a href="#">Ajutor</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
          <Link
            style={{ textDecoration: "none" }}
            to={auth ? "/profile" : "/login"}
            className="navbar_button"
          >
            <div className="login_button">{auth ? "Profile" : "Login"}</div>
          </Link>
        </div>
        <div className="navbar_bottom">
          <div to="/home" className="logo">
            <Link to={auth ? "/home" : "/"}>
              <img src={Logo} />
            </Link>
          </div>
          <div className="menu">
            <ul className="navbar_items">
              <li className="dropdown">
                <img src={Icon} />{" "}
                <div className="navbar_text">
                  Fabricanti <i className="fas fa-caret-right"></i>
                </div>
              </li>
              <li className="dropdown">
                <img src={Icon} />{" "}
                <div className="navbar_text">
                  Fabricanti <i className="fas fa-caret-right"></i>
                </div>
              </li>
              <li className="dropdown">
                <img src={Icon} />{" "}
                <div className="navbar_text">
                  Fabricanti <i className="fas fa-caret-right"></i>
                </div>
              </li>
            </ul>
          </div>
          <div className="toggle">
            <i
              onClick={() => setNavigation(!navigation)}
              className="fas fa-bars"
            ></i>
          </div>
        </div>
      </div>
      {navigation && (
        <ul className="toggle_list">
          <li>
            <Link to={auth ? "/profile" : "/login"}>
              <img src={Icon} />
              {auth ? "Profile" : "Login"}
            </Link>
          </li>
          <li>
            <a href="#">
              <img src={Icon} />
              Fabricanti
            </a>
          </li>
          <li>
            <a href="#">
              <img src={Icon} />
              Fabricanti
            </a>
          </li>
          <li>
            <a href="#">
              <img src={Icon} />
              Fabricanti
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.user.auth,
});

export default connect(mapStateToProps, null)(Navbar2);

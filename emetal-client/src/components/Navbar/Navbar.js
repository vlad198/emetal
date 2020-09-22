import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./index.css";

const Navbar = ({ auth }) => {
  return (
    <section>
      <nav className="navbar navbar-light navbar-expand-md">
        <div className="container-fluid">
          <Link to="#" className="navbar-brand" href="#">
            <img alt="" src={require("../../assets/img/logo.png")} />{" "}
          </Link>
          <button
            data-toggle="collapse"
            className="navbar-toggler"
            data-target="#navcol-1"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navcol-1"
            style={{ marginTop: "-109px" }}
          >
            <ul className="nav navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="#" className="nav-link active" href="#">
                  Informații
                </Link>
              </li>
              <li className="nav-item">
                <Link to="#" className="nav-link text-dark" href="#">
                  Ajutor
                </Link>
              </li>
              <li className="nav-item text-dark">
                <Link to="#" className="nav-link text-dark" href="#">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link to="#" className="btn btn-primary" href="#" role="button">
                  {auth ? "Profil" : "Conectează-te"}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {!auth ? null : (
        <nav
          className="navbar navbar-light navbar-expand-md"
          style={{ marginTop: "7px", height: "20px", paddingBottom: "20px" }}
        >
          <div className="container-fluid">
            <button
              data-toggle="collapse"
              className="navbar-toggler"
              data-target="#navcol-2"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navcol-2">
              <ul className="nav navbar-nav ml-auto">
                <li className="nav-item">
                  <div className="nav-item dropdown">
                    <Link
                      to="#"
                      className="dropdown-toggle active text-dark"
                      data-toggle="dropdown"
                      aria-expanded="false"
                      href="#"
                      style={{ marginRight: "30px", fontWeight: "bold" }}
                    >
                      <img
                        alt=""
                        src={require("../../assets/img/img1.png")}
                        style={{ marginTop: "-37px" }}
                      />
                      Fabricanți
                    </Link>
                    <div className="dropdown-menu">
                      <Link to="#" className="dropdown-item" href="#">
                        First Item
                      </Link>
                      <Link to="#" className="dropdown-item" href="#">
                        Second Item
                      </Link>
                      <Link to="#" className="dropdown-item" href="#">
                        Third Item
                      </Link>
                    </div>
                  </div>
                </li>
                <li className="nav-item">
                  <div className="nav-item dropdown">
                    <Link
                      to="#"
                      className="dropdown-toggle text-dark"
                      data-toggle="dropdown"
                      aria-expanded="false"
                      href="#"
                      style={{ marginRight: "30px", fontWeight: "bold" }}
                    >
                      <img
                        alt=""
                        src={require("../../assets/img/img1.png")}
                        style={{ marginTop: "-37px" }}
                      />
                      Cumpărători
                    </Link>
                    <div className="dropdown-menu">
                      <Link to="#" className="dropdown-item" href="#">
                        First Item
                      </Link>
                      <Link to="#" className="dropdown-item" href="#">
                        Second Item
                      </Link>
                      <Link to="#" className="dropdown-item" href="#">
                        Third Item
                      </Link>
                    </div>
                  </div>
                </li>
                <li className="nav-item">
                  <div className="nav-item dropdown">
                    <Link
                      to="#"
                      className="dropdown-toggle text-dark"
                      data-toggle="dropdown"
                      aria-expanded="false"
                      href="#"
                      style={{ fontWeight: "bold" }}
                    >
                      <img
                        alt=""
                        src={require("../../assets/img/img1.png")}
                        style={{ marginTop: "-37px" }}
                      />
                      Montatori
                    </Link>
                    <div className="dropdown-menu">
                      <Link to="#" className="dropdown-item" href="#">
                        First Item
                      </Link>
                      <Link to="#" className="dropdown-item" href="#">
                        Second Item
                      </Link>
                      <Link to="#" className="dropdown-item" href="#">
                        Third Item
                      </Link>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      )}
    </section>
  );
};

const mapStateToProps = (state) => ({
  auth: state.user.auth,
});

export default connect(mapStateToProps, null)(Navbar);

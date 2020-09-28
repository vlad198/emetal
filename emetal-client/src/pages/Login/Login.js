import { push } from "connected-react-router";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { login } from "../../redux/user/userActions";
import "./index.css";
import { Link, Redirect } from "react-router-dom";

const Login = ({ login, auth, loadingAction }) => {
  useEffect(() => {
    document.title = "Login Page";
  }, []);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(user);
  };

  if (auth) return <Redirect to="/home" />;

  return (
    <div className="login-clean background">
      <form method="post" onSubmit={handleSubmit}>
        <h2 className="sr-only">Login Form</h2>
        <div className="illustration">
          <img alt="" src={require("../../assets/img/logo.png")} />
        </div>
        <div className="form-group">
          <input
            onChange={handleChange}
            className="form-control"
            type="email"
            name="email"
            placeholder="Email"
          />
        </div>
        <div className="form-group">
          <input
            onChange={handleChange}
            className="form-control"
            type="password"
            name="password"
            placeholder="Password"
          />
        </div>
        <div className="form-group">
          <button
            style={{ marginBottom: 10 }}
            type="submit"
            className="btn btn-primary btn-block"
            disabled={loadingAction}
          >
            {!loadingAction ? (
              "Conecteaza-te"
            ) : (
              <div>
                <span
                  className="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Loading...</span>
              </div>
            )}
          </button>
        </div>
        <Link to="#" className="forgot" href="#" style={{ fontSize: "15px" }}>
          <span style={{ textDecoration: "underline" }}>Înregistrează-te</span>
          <br />
        </Link>
        <Link to="#" className="forgot" href="#">
          V-ați uitat email-ul sau parola?
        </Link>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.user.auth,
  loadingAction: state.user.loadingAction,
});

const mapDispatchToProps = (dispatch) => {
  return {
    login: (userData) => dispatch(login(userData)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

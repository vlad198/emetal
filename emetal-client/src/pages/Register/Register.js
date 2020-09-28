import React, { Component, Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { toast } from "react-toastify";
import { register } from "../../redux/user/userActions";
import "./index.css";

const Register = ({
  register,
  loadingAction,
  auth,
  notifMessage,
  notifTitle,
  notifStatus,
  showNotif,
}) => {
  useEffect(() => {
    document.title = "Login Page";
  }, []);

  const [user, setUser] = useState({
    individualInfo: {
      firstName: "",
      lastName: "",
    },
    companyInfo: { CUI: "", companyName: "" },
    role: "individual", // default
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.role === "individual") {
      delete user["companyInfo"];
    } else {
      delete user["individualInfo"];
    }

    if (user.password === user.confirmPassword) {
      delete user["confirmPassword"];
      register(user);
    } else toast.error("Register fail.");

    setUser({
      individualInfo: {
        firstName: "",
        lastName: "",
      },
      companyInfo: { CUI: "", companyName: "" },
      role: user.role,
      phone: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  if (auth) return <Redirect to="/home" />;

  return (
    <div className="container" style={{ position: "relative" }}>
      <h1 style={{ textAlign: "center" }}>Register</h1>
      <form onSubmit={handleSubmit}>
        <div className="registerType">
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              defaultChecked={true}
              name="role"
              onChange={handleChange}
              id="inlineRadio1"
              value="individual"
            />
            <label className="form-check-label" htmlFor="inlineRadio1">
              Persoana Fizica
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="role"
              onChange={handleChange}
              id="inlineRadio2"
              value="company"
            />
            <label className="form-check-label" htmlFor="inlineRadio2">
              Persoana Juridica
            </label>
          </div>
        </div>

        <div className="form-group">
          <label
            htmlFor={
              user.role === "individual"
                ? "individualInfo.firstName"
                : "companyInfo.companyName"
            }
          >
            {user.role === "individual" ? "Nume" : "Numele Companiei"}{" "}
          </label>
          <input
            onChange={(e) =>
              user.role === "individual"
                ? setUser({
                    ...user,
                    individualInfo: {
                      firstName: e.target.value,
                      lastName: user.individualInfo.lastName,
                    },
                  })
                : setUser({
                    ...user,
                    companyInfo: {
                      companyName: e.target.value,
                      CUI: user.companyInfo.CUI,
                    },
                  })
            }
            value={
              user.role === "individual"
                ? user.individualInfo.firstName
                : user.companyInfo.companyName
            }
            type="text"
            className="form-control"
            name={
              user.role === "individual"
                ? "individualInfo.firstName"
                : "companyInfo.companyName"
            }
            id={
              user.role === "individual"
                ? "individualInfo.firstName"
                : "companyInfo.companyName"
            }
          />
        </div>

        <div className="form-group">
          <label
            htmlFor={
              user.role === "individual"
                ? "individualInfo.lastName"
                : "companyInfo.CUI"
            }
          >
            {user.role === "individual" ? "Prenume" : "CUI"}{" "}
          </label>
          <input
            onChange={(e) =>
              user.role === "individual"
                ? setUser({
                    ...user,
                    individualInfo: {
                      firstName: user.individualInfo.firstName,
                      lastName: e.target.value,
                    },
                  })
                : setUser({
                    ...user,
                    companyInfo: {
                      companyName: user.companyInfo.companyName,
                      CUI: e.target.value,
                    },
                  })
            }
            value={
              user.role === "individual"
                ? user.individualInfo.lastName
                : user.companyInfo.CUI
            }
            type="text"
            className="form-control"
            name={
              user.role === "individual"
                ? "individualInfo.lastName"
                : "companyInfo.CUI"
            }
            id={
              user.role === "individual"
                ? "individualInfo.lastName"
                : "companyInfo.CUI"
            }
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Telefon</label>
          <input
            onChange={handleChange}
            value={user.phone}
            type="text"
            className="form-control"
            name="phone"
            id="phone"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            onChange={handleChange}
            value={user.email}
            type="email"
            className="form-control"
            id="email"
            name="email"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Parola</label>
          <input
            onChange={handleChange}
            value={user.password}
            type="password"
            className="form-control"
            name="password"
            id="password"
          />
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Confirmare Parola</label>
          <input
            onChange={handleChange}
            value={user.confirmPassword}
            type="password"
            className="form-control"
            name="confirmPassword"
            id="confirmPassword"
          />
        </div>

        <button
          style={{ marginBottom: 10 }}
          type="submit"
          className="btn btn-primary btn-block"
          disabled={loadingAction}
        >
          {!loadingAction ? (
            "Submit"
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
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  loadingAction: state.user.loadingAction,
  auth: state.user.auth,
});

const mapDispatchToProps = (dispatch) => ({
  register: (userData) => dispatch(register(userData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);

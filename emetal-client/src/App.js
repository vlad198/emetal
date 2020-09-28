import React, { useLayoutEffect } from "react";
import { connect } from "react-redux";
import Routes from "./components/Routes";
import { ConnectedRouter } from "connected-react-router";
import { isAuth } from "./redux/user/userActions";
import Footer from "./components/Footer/Footer";
import Navbar2 from "./components/Navbar2/Navbar2";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App({ history, firstLoad, isAuth }) {
  useLayoutEffect(() => isAuth(), []);

  if (firstLoad) return null;

  return (
    <ConnectedRouter history={history}>
      <Navbar2 />
      <ToastContainer autoClose={2000} />
      <Routes />
      {/* <Register /> */}
      <Footer />
    </ConnectedRouter>
  );
}

const mapStateToProps = (state) => ({
  firstLoad: state.user.firstLoad,
});

const mapDispatchToProps = (dispatch) => ({
  isAuth: () => dispatch(isAuth()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

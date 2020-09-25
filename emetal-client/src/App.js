import React, { useEffect, useLayoutEffect } from "react";
import { connect } from "react-redux";
import Routes from "./components/Routes";
import { ConnectedRouter } from "connected-react-router";
import { isAuth } from "./redux/user/userActions";
import Footer from "./components/Footer/Footer";
import Navbar2 from "./components/Navbar2/Navbar2";

function App({ history, firstLoad, isAuth }) {
  useLayoutEffect(() => isAuth(), []);

  if (firstLoad) return null;

  return (
    <ConnectedRouter history={history}>
      <Navbar2 />
      <Routes />
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

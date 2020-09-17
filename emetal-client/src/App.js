import React, { useEffect } from "react";
import { connect } from "react-redux";
import Routes from "./components/Routes";
import { ConnectedRouter } from "connected-react-router";
import { isAuth } from "./redux/user/userActions";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

function App({ history, firstLoad, isAuth }) {
  useEffect(() => isAuth());

  if (firstLoad) return null;

  return (
    <ConnectedRouter history={history}>
      <Navbar />
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

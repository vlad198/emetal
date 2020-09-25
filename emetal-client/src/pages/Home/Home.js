import React from "react";
import { logout } from "../../redux/user/userActions";
import { connect } from "react-redux";

const Home = ({ logout, user }) => {
  const handleLogout = () => {
    logout();
  };

  return (
    <div>
      <h1>Hello</h1>
      <button className="btn btn-primary" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user.user,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

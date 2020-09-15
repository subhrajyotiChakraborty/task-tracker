import React from "react";
import { connect } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";

import classes from "./App.module.scss";
import Login from "./containers/Auth/Login/Login";
import Register from "./containers/Auth/Register/Register";
import Dashboard from "./containers/Dashboard/Dashboard";
import NotFound from "./components/404/NotFound";
import Home from "./components/Home/Home";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={classes.App}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Register} />
          <Route path="/dashboard" component={Dashboard} />
          <Route component={NotFound} />
          {/* <Redirect to="/login" /> */}
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.auth.loading,
    username: state.auth.name,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {

//   }
// }

export default connect(mapStateToProps, null)(App);

import React, { Component } from "react";

import classes from "./Dashboard.module.scss";

class Dashboard extends Component {
  render() {
    return (
      <div className={classes.Dashboard}>
        <p>This is Dashboard page</p>
      </div>
    );
  }
}

export default Dashboard;

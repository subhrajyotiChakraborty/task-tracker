import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <div>
        <p>This Is Home Page</p>
        <Link to="/login"> Go to Login</Link>
      </div>
    );
  }
}

export default Home;

import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      <h1>Welcome To Team Manager</h1>
      <Link to="/players/list">See Player List</Link>
    </div>
  );
};

export default LandingPage;

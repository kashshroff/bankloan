import React from "react";
import { Link } from 'react-router-dom'

function Home({ logout, ...rest }) {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/signup">Sign up</Link>
    </div>
  );
}

export default Home;
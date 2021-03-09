import React from "react";

function Secret({ logout, ...rest }) {
  return (
    <div>
      <h1>Secret</h1>
      <button onClick={logout}>Log out</button>
    </div>
  );
}

export default Secret;
// components/Home.jsx
import React from "react";
import { useAuth } from "../auth/AuthContext";

function Home() {
  const { user } = useAuth();
  return (
    <div>
      <h2>Home Page</h2>
      {user ? <p>Logged in as {user.name}</p> : <p>You are not logged in.</p>}
    </div>
  );
}

export default Home;

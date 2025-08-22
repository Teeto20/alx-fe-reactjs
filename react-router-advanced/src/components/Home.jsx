// components/Home.jsx
import React from "react";
import { useAuth } from "../auth/AuthContext";

function Home() {
  const { user, logout } = useAuth();

  return (
    <div>
      <h2>Home Page</h2>
      {user ? (
        <div>
          <p>Welcome, {user.name}!</p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <p>You are not logged in.</p>
      )}
    </div>
  );
}

export default Home;

// components/Profile.jsx
import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

function Profile() {
  const { user, logout } = useAuth();

  return (
    <div>
      <h2>Profile Page</h2>
      <p>Welcome, {user?.name}!</p>
      <button onClick={logout}>Logout</button>

      <nav>
        <Link to="details">Details</Link> |{" "}
        <Link to="settings">Settings</Link>
      </nav>

      {/* Nested content */}
      <Outlet />
    </div>
  );
}

export default Profile;

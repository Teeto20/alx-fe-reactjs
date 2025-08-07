import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{ padding: "10px", backgroundColor: "#282c34", color: "white" }}
    >
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          gap: "15px",
          margin: 0,
          padding: 0,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

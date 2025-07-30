import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Search from "./components/Search";
import { fetchUserData } from "./services/githubService";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (username) => {
    setLoading(true);
    setError("");
    setUser(null);

    try {
      const data = await fetchUserData(username);
      setUser(data);
    } catch (err) {
      setError("Looks like we can't find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />,
      </Routes>

      <div>
        <Search onSearch={handleSearch} />

        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}

        {user && (
          <div>
            <img src={user.avatar_url} alt={user.login} width={100} />
            <h2>{user.name || user.login}</h2>
            <p>{user.bio}</p>
            <a href={user.html_url} target="_blank" rel="noreferrer">
              View GitHub Profile
            </a>
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;

import { useState } from "react";
import { fetchUserData } from "../services/githubService";
function Search() {
  const [username, setUsername] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
 
  const handleSearch = async (filters) => {
    setLoading(true);
    setError("");
    setUsers([]);

    try {
      const data = await fetchUserData(filters);
      setUsers(data);
    } catch (err) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };
  // ...existing code...
const handleSubmit = (e) => {
  e.preventDefault();
  handleSearch({ username, location, minRepos });
};
// ...existing code...
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
          className="border rounded px-3 py-2 w-full"
        />
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Location (optional)"
          className="border rounded px-3 py-2 w-full"
        />
        <input
          type="number"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          placeholder="Minimum Repositories (optional)"
          className="border rounded px-3 py-2 w-full"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded w-full"
        >
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {users.map((user) => (
        <div key={user.id} className="border rounded p-4 rounded shadow">
          <img
            src={user.avatar_url}
            alt={user.login}
            width={60}
            className="rounded-full"
          />
          <h2>{user.login}</h2>
          <p>{user.bio}</p>
          <a
            href={user.html_url}
            target="_blank"
            rel="noreferrer"
            className="text-blue-500 underline"
          >
            View GitHub Profile
          </a>
        </div>
      ))}
    </div>
  );
}

export default Search;

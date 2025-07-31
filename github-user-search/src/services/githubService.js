// services/githubService.js
import axios from "axios";

export const fetchUserData = async ({ username, location, minRepos }) => {
  let query = username ? `${username} in:login` : "";
  if (location) query += ` location:${location}`;
  if (minRepos) query += ` repos:>=${minRepos}`;
  const url = `https://api.github.com/search/users?q=${encodeURIComponent(query)}`;
  const response = await axios.get(url);
  return response.data.items;
};
